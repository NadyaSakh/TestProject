import { LOG } from '../../Utils/logger'
import { Observable } from 'rxjs/Rx'
import { ajax } from 'rxjs/observable/dom/ajax'
import AsyncStorage  from '@react-native-community/async-storage'

export const Actions = {
    LOADING_SUCCESS: 'LOADING_SUCCESS',
    LOADING_FAIL: 'LOADING_FAIL',
    LOADING: 'LOADING'
}

export const getNewsAction = () => ({
    type: Actions.LOADING
})

export const getNewsEpic = action$ =>
    action$.ofType(Actions.LOADING)
        .mergeMap(() => {
            LOG('Здесь', 'Получение новостей')
            return ajax.getJSON('https://newsapi.org/v2/top-headlines?country=ru&apiKey=8dbd435632a04cc8ad04ab9b159c1eed')
                .timeout(5000)
                .mergeMap(response => {
                    LOG(response, 'Получен ответ')
                    if (response) {
                        LOG('ВСЁ ХОРОШО', 'Получен ответ')
                        return getCurrentNews(response)
                            .mergeMap((data) => saveNews(data))
                            .mergeMap((newsList) => Observable.of(gettingNewsSuccess(newsList)))
                    }
                    else {
                        LOG('Не получены новости', 'Не получены новости')
                        return Observable.of(getNewsFail())

                    }
                })
                .catch(error => {
                    LOG(error, 'getNewsEpic')
                    return Observable.of(getNewsFail())
                })
        })

const getNewsFail = () => ({
    type: Actions.LOADING_FAIL,
    payload: {
        error: 'Новости не загружены.'
    }
})

const gettingNewsSuccess = newsList => ({
    type: Actions.LOADING_SUCCESS,
    payload: {
        newsList
    }
})

const getCurrentNews = (response) => {
    let newsList = []
    let id_ = 0
    response.articles.forEach(article => {
        let tmp = {
            id: id_,
            publishedAt: article.publishedAt,
            title: article.title,
            description: article.description
        }
        newsList.push(tmp)
        id_ += 1
    })
    return Observable.of(newsList)
}

const saveNews = response => {
    return new Observable((observer: observer) => {
        LOG('saveNews', 'News')
        AsyncStorage.setItem('News', JSON.stringify(response), error => {
            if (error !== null) {
                observer.error(error)
            }
            else {
                observer.next(response)
                observer.complete()
            }
        })
    })
}