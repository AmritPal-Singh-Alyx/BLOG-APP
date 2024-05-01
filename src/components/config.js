

import Thumbnail1 from "../utils/thumbnail1.jpg";
import Thumbnail2 from "../utils/thumbnail2.jpg";
import Thumbnail3 from "../utils/thumbnail3.jpg";
import Thumbnail4 from "../utils/thumbnail4.jpg"

import Avatar1 from "../utils/avatar.jpg"


export const DUMMY_POSTS = [

    {
        id: '1',
        thumbnail: Thumbnail1,
        category: "education",
        title: "This is the title of the very first post on this blog",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel magnam, ratione quam aspernatur iure, explicabo assumenda quae iste ipsam magni, impedit nesciunt temporibus mollitia! Perspiciatis excepturi ex velit quia distinctio dolore eligendi.",
        authorID: 3


    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: "science",
        title: "This is the title of the very 2nd post on this blog",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel magnam, ratione quam aspernatur iure, explicabo assumenda quae iste ipsam magni, impedit nesciunt temporibus mollitia! Perspiciatis excepturi ex velit quia distinctio dolore eligendi.",
        authorID: 1


    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: "education",
        title: "This is the title of the very 3rd post on this blog",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel magnam, ratione quam aspernatur iure, explicabo assumenda quae iste ipsam magni, impedit nesciunt temporibus mollitia! Perspiciatis excepturi ex velit quia distinctio dolore eligendi.",
        authorID: 4


    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: "education",
        title: "This is the title of the very 4th post on this blog",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel magnam, ratione quam aspernatur iure, explicabo assumenda quae iste ipsam magni, impedit nesciunt temporibus mollitia! Perspiciatis excepturi ex velit quia distinctio dolore eligendi.",
        authorID: 2


    },
]



export const AuthorsData = [
    {
        id: 1, avatar: Avatar1, name: "Amritpal Singh", posts: 5
    },
    {
        id: 2, avatar: Avatar1, name: "Kritik Manav", posts: 0
    },
    {
        id: 3, avatar: Avatar1, name: "Deepansh Gupta", posts: 3
    },
    {
        id: 4, avatar: Avatar1, name: "Aryan Rawat", posts: 2
    },
    {
        id: 5, avatar: Avatar1, name: "Kavan Patel", posts: 1
    },
]



export const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
}


export const formats = [
    'header',
    'bolder', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

export const POST_CATEGORIES = [
    "Agriculture", "Business", "Education", "Entertainment", "Art", "Investment", "Uncategorized", "Weather"
]