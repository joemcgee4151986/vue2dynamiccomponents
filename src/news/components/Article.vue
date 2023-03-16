<template>
    <div class="article">
        <h1>{{ title }}</h1>

        <p>Published on {{ published | moment }}</p>
        <p class="lead">{{ content }}</p>
        <app-author></app-author>
    </div>
</template>

<script>
    import moment from 'moment';
    import Author from './Author.vue';

    export default {
        data() {
            return {
                title: '10 Reasons why Vue.js is Awesome',
                published: new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan eu erat ut scelerisque.'
            };
        },
        filters: {
            moment: function(value) {
                return moment(value).format('MMMM Do');
            }
        },
        components: {
            appAuthor: Author
        }
    }
</script>