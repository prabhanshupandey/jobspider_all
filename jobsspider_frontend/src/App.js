import Category from './admin/category/Category';
import DisplayAllCategory from './admin/category/DisplayAllCategory';
import SubCategory from './admin/subcategory/SubCategory';
import DisplayAllSubCategory from './admin/subcategory/DisplayAllSubCategory';
import Company from './admin/company/Company';
import HomePage from "./homepage/HomePage";
import DisplayAllCompany from "./admin/company/DisplayAllCompany"
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import RequiredSkills from './admin/requiredskills/RequiredSkills';
import DisplayAllskills from './admin/requiredskills/DisplayAllskills';
import CompanyJobs from './admin/companyjobs/CompanyJobs';
import DisplayallCompanyJobs from './admin/companyjobs/DisplayAllCompanyJobs';
import LoginPage from './admin/login/LoginPage';
import DashBoard from './admin/login/DashBoard';
import CompanyVerification from './admin/company/CompanyVerification';
import UserReviewComponent from './homepage/components/UserReviewComponent';
import ReviewScroll from './homepage/components/ReviewScroll';
import SpiderComponent from './homepage/components/SpiderComponent';
import RecentUpdateComponent from './homepage/components/RecentUpdateComponent';

import FilterComponent from './homepage/components/FilterComponent';
import Advertisment from './homepage/components/Advertisment';
import Descripition from './homepage/components/Descripition';
import ShrinkSearchComponent from './homepage/components/ShrinkSearchComponent';
import MyFilterComponent from'./homepage/components/MyFilterComponent';
import GetResumeHelp from './homepage/components/GetResumeHelp';
import SingleShrinkSearchComponent from './homepage/components/SingleShrinkSearchComponent';
import AllFilterComponent from './homepage/components/AllFilterComponent';
import TwoPeopleHireComponent from './homepage/components/TwoPeopleHireComponent';
import FAQ from './homepage/components/FaqComponent';
import JobHightlight from './homepage/components/JobHighlight';
import JobCartScroll from './homepage/components/JobCartScroll';
import SimilarJobs from './homepage/components/SimilarJobs';
import CartDetailsComponent from './homepage/components/CartDetailsComponent';
import Footer from './homepage/components/Footer';
import Email from  "./userlogin/Email"
import Password from  "./userlogin/Password"
import Mobile from  "./userlogin/Mobile"
import Mobileotp from  "./userlogin/Mobileotp"
import ReadyNextPage from  "./userlogin/ReadyNextPage"
import WelcomeBack from  "./userlogin/WelcomeBack"
import JobSeeker from  "./userlogin/JobSeeker"
import EmailVerify from  "./userlogin/EmailVerify"
import EmailAddressConfirmed from  "./userlogin/EmailAddressConfirmed"
import BasicDetails from './apply/BasicDeatils';
import ProgressBar from './apply/ProgressBar';
import Image from  './apply/Image'
import LocationDetails from './apply/LocationDetails';
import SearchCity from './apply/SearchCity';
import LocationDetailSecond from './apply/LocationDetailSecond';
import CityPopupComponent from './apply/CityPopupComponent';
import Resume from './apply/Resume'
import ApplyForms from './apply/ApplyForms';
import Reports from './admin/applydetail/Reports'
import User_profile from './userlogin/User_profile'
import EmployeeLoginPage from './admin/companyjobs/EmployeeLoginPage';



function App() {
  return (
    <div style={{width:"100%"}}>
      <Router>
        <Routes>
          <Route element={<Category/>} path="/category"/>
          <Route element={<DisplayAllCategory/>} path="/displayallcategory"/>
          <Route element={<SubCategory/>} path="/subcategory"/>
          <Route element={<DisplayAllSubCategory/>} path="/displayallsubcategory"/>
          <Route element={<Company/>} path="/company"/>
          <Route element={<HomePage/>} path="/homepage"/>
          <Route element={<DisplayAllCompany/>} path="/DisplayAllCompany"/>
          <Route element={<RequiredSkills/>} path="/requiredskills"/>
          <Route element={<DisplayAllskills/>} path="/DisplayAllskills"/>
          <Route element={<CompanyJobs/>}path="/companyjobs"/>
          <Route element={<DisplayallCompanyJobs/>} path="/DisplayallCompanyJobs"/>
         <Route element={<LoginPage/>} path="/loginpage"/>
         <Route element={<DashBoard/>}path="/DashBoard/*"/>
         <Route element={<CompanyVerification/>}path="/companyverification/*"/>
         <Route element={<UserReviewComponent/>}path="/user"/>
         <Route element={<ReviewScroll/>}path="/review"/>
         <Route element={<SpiderComponent/>}path="/spider"/>
         <Route element={<RecentUpdateComponent/>}path="/bake"/>
         <Route element={<Footer/>} path="/footer"/>
         <Route element={<JobCartScroll/>} path="/scroll"/>
         <Route element={<FilterComponent/>} path="/filter"/>
         <Route element={<Advertisment/>} path="/add"/>
         <Route element={<Descripition/>} path="/descripition"/>
         <Route element={<ShrinkSearchComponent/>} path="/shrinkSearchComponent"/>
         {/* <Route element={<MyFilterComponent/>} path="/myfilter/:skill"/> */}
         <Route element={<MyFilterComponent/>} path="/myfilter/"/>
         <Route element={<GetResumeHelp/>} path="/abc"/>
         <Route element={<TwoPeopleHireComponent/>} path="/hire"/>
         <Route element={<SingleShrinkSearchComponent/>} path="/shrink"/>
         <Route element={<SimilarJobs/>} path="/job"/>
         <Route element={<FAQ/>} path="/faq"/>
         <Route element={<JobHightlight/>} path="/highlights"/>
         <Route element={<CartDetailsComponent/>} path="/Cartdetails"/>
         <Route element={<ReadyNextPage/>} path="/readynextpage"/>
         <Route element={<Email/>} path="/email"/> 
         <Route element={<EmailAddressConfirmed/>} path="/emailaddress"/>
         <Route element={<EmailVerify/>} path="/emailverify"/>
          <Route element={<WelcomeBack/>} path="/welcomeback"/>
          <Route element={<Password/>} path="/password"/>
          <Route element={<Mobileotp/>} path="/mobileotp"/>
          <Route element={<Mobile/>} path="/mobile"/>
          <Route element={<JobSeeker/>} path="/jobseeker"/>
          <Route element={<BasicDetails/>} path="/detail" />
          <Route element={<ProgressBar/>} path="/progress" />
          <Route element={<Image/>} path="/img" />
          <Route element={<LocationDetails/>} path="/location" />
          <Route element={<SearchCity/>} path="/city" />
          <Route element={<LocationDetailSecond/>} path="/second" />  
          <Route element={<Resume/>} path="/resume" />
          <Route element={<CityPopupComponent/>} path="/pop" />
          <Route element={<ApplyForms/>} path="/applyforms" />
          <Route element={<Reports/>} path="/Report" />
          <Route element={<EmployeeLoginPage/>} path="/employee" />
          <Route element={<User_profile/>} path="/profile" />
       
          
      

         
        </Routes>
      </Router>
    </div>
  );
}

  
export default App;
