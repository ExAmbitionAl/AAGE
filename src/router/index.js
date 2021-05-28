import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from "@/views/Home";
import Gallery from "@/views/Gallery";
import Playlist from "@/views/Playlist";

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Gallery',
        path: '/gallery',
        component: Gallery
    },
    {
        name: 'Playlist',
        path: '/playlist',
        component: Playlist
    }
];

const router = new VueRouter({routes, mode:'history'});

export  default router;
