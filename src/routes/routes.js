import LoginPage from '../pages/LoginPage.vue';
import HomePage from '../pages/HomePage.vue';
import UserPage from '../pages/UserPage';
import AddHotel from '../pages/AddHotel.vue';
import AddChambre from '../pages/AddChambre.vue';
import ViewHotel from '../pages/ViewHotel.vue';
import AddUser from '../pages/AddUser.vue';
import ReservePage from '../pages/ReservePage.vue';
import PayePage from '../pages/PayePage.vue';
import ReserveCancelPage from '../pages/ReserveCancelPage.vue';

export default [
    {name : "login", path : "/", component: LoginPage},
    {name : "homepage", path : "/home", component: HomePage},
    {name : "userpage", path : "/users", component: UserPage},
    {name : "addhotel", path : "/addhotel", component: AddHotel},
    {name : "viewhotel", path : "/showchambre", component: ViewHotel},
    {name : "addchambre", path : "/addchambre", component: AddChambre},
    {name : "adduser", path : "/adduser", component: AddUser},
    {name : "reservepage", path : "/reserve", component: ReservePage},
    {name : "payepage", path : "/reserves-traite", component: PayePage},
    {name : "reservecancelpage", path : "/reserves-cancel", component: ReserveCancelPage},
];