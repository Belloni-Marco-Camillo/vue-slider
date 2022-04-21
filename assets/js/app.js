const app = new Vue({
    el: '#app',
    data: {
        activeImage: 0,
        galleria: [{
                image: './assets/img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: './assets/img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: './assets/img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: './assets/img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: './assets/img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]
    },
    methods: {
        prevImage() {
            console.log('prev img');
            if (this.activeImage === 0) {
                this.activeImage = this.thumb.length
            }
            this.activeImage--
        },
        nextImage() {
            console.log('next img');
            this.activeImage++
                if (this.activeImage === this.thumb.length) {
                    this.activeImage = 0;
                }
        }
    }
});