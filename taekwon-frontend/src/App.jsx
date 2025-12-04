// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' 사진

import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Introducion from './pages/introductionPages/Introduction.jsx'
import Rreeting from './pages/introductionPages/Rreeting.jsx'
import MasterList from './pages/introductionPages/MasterList.jsx'
import DirectionsMap from './pages/introductionPages/DirectionsMap.jsx'

import Progarm from './pages/programPages/Program.jsx'
import WeeklyPlanner from './pages/programPages/WeeklyPlanner.jsx'
import ClassSchedule from './pages/programPages/ClassSchedule.jsx'

import Photo from './pages/photoPages/Photo.jsx'
import Event from './pages/photoPages/Event.jsx'
import DailyMoments from './pages/photoPages/DailyMoments.jsx'

import Shop from './pages/shopPages/Shop.jsx'
import Dobok from './pages/shopPages/Dobok.jsx'
import Belt from './pages/shopPages/Belt.jsx'
import SeasonalUniform from './pages/shopPages/SeasonalUniform.jsx'

import Service from './pages/servicePages/Service.jsx'
import NoticeBoard from './pages/servicePages/NoticeBoard.jsx'
import ReviewSection from './pages/servicePages/ReviewSection.jsx'
import Contact from './pages/servicePages/Contact.jsx'

function App() {

  return (
    <div className="flex flex-col min-h-screen"> {/* 전체 앱 높이 설정 */}
      <Header />
      <main className="flex-grow pt-[100px]"> {/* Header 높이만큼 패딩 */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/introduction" element={<Introducion />}>
            <Route index element={<div></div>} />
            <Route path="Rreeting" element={<Rreeting />} />
            <Route path="MasterList" element={<MasterList />} />
            <Route path="DirectionsMap" element={<DirectionsMap />} />
          </Route>

          <Route path="/program" element={<Progarm />}>
            <Route index element={<div></div>} />
            <Route path="WeeklyPlanner" element={<WeeklyPlanner />} />
            <Route path="ClassSchedule" element={<ClassSchedule />} />
          </Route>
          
          <Route path="/photo" element={<Photo />}>
            <Route index element={<div></div>} />
            <Route path="Event" element={<Event />} />
            <Route path="DailyMoments" element={<DailyMoments />} />
          </Route>

          <Route path="/shop" element={<Shop />}>
            <Route index element={<div></div>} />
            <Route path="Dobok" element={<Dobok />} />
            <Route path="Belt" element={<Belt />} />
            <Route path="SeasonalUniform" element={<SeasonalUniform />} />
          </Route>

          <Route path="/service" element={<Service />}>
            <Route index element={<div></div>} />
            <Route path="NoticeBoard" element={<NoticeBoard />} />
            <Route path="ReviewSection" element={<ReviewSection />} />
            <Route path="Contact" element={<Contact />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App