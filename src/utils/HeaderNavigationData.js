import facebook from '../assets/image/icons/facebook.svg'
import youtube from '../assets/image/icons/youtube.svg'
import instagram from '../assets/image/icons/instagram.svg'
import email from '../assets/image/icons/email.svg'
import telegram from '../assets/image/icons/telegram.svg'


export const headerNavData = [
    {
        title: 'Главная',
        path: '/',
        id: 1
    },
    {
        title: 'О нас',
        path: '/about',
        id: 2
    },
    {
        title: 'Наша команда',
        path: '/',
        id: 3
    },
    {
        title: 'Продукция',
        path: '/',
        products: ['Яблони', 'Персики', 'Винограды', 'Вся продукция'],
        id: 4
    },
    {
        title: 'Отзывы',
        path: '/',
        id: 5
    },
    {
        title: 'Блог',
        path: '/blog',
        id: 6
    },
    {
        title: 'Контакты',
        path: '/contacts',
        id: 7
    },
    {
        title: 'Каталог',
        path: '/',
        id: 8
    },
    {
        title: 'Политика конфиденциальности',
        path: '/',
        id: 9
    },
    {
        title: 'Права использования',
        path: '/',
        id: 10
    }
]

export const headerNavIcon = [
    {
        icon: facebook,
        id: 1
    },
    {
        icon: youtube,
        id: 2
    },
    {
        icon: instagram,
        id: 3
    },
    {
        icon: email,
        id: 4
    },
    {
        icon: telegram,
        id: 5
    }
]