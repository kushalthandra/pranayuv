import NavBar from '../components/NavBar';
import Footer from "../components/footer";
import SwiperComponent from '../components/SwiperComponent';
import ScrollSection from '../components/ScrollSection';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#ccd8e3' }}>
      <NavBar />
      <SwiperComponent />
      <ScrollSection />
    </div>
  );
}
