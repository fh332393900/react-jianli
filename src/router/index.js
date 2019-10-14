import App from '../App';
import Home from '../views/Home/Home'
import Person from '../views/Person/Person'
const router = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/person',
        component:Person
    }
];
export default router;

