import Home from "./Home.vue"
import Road from "./Road.vue"
import people from "./components/people.vue"
import me from "./components/me.vue"
import fabu from "./components/fabu.vue"
import luntan from "./components/luntan.vue"
import setting from "./components/setting.vue"
import xiangqing from "./components/xiangqing.vue"
export default{
    routes:[
        {path:"/Home",component:Home,meta:{dis:true,tis:true}},
        {path:"/Road",component:Road,meta:{dis:false,tis:true}},
        {path:"/people",component:people,meta:{dis:false,tis:false}},
        {path:"/me",component:me,meta:{dis:true,tis:true}},
        {path:"/setting",component:setting,meta:{dis:false,tis:false}},
        {path:"/xiangqing",component:xiangqing,meta:{dis:false,tis:false}},
        {path:"/fabu",component:fabu,meta:{dis:true,tis:true}},
        {path:"/luntan",component:luntan,meta:{dis:true,tis:true}},
        {path:"/",redirect:"/Road"}
    ]
}