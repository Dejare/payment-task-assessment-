import "./assets/styles/main.scss";
import { TabSection } from './component/TabSection';

function App() {
  return (
    <section className="absolute top-[10%] text-white left-[50%] -translate-x-2/4 md:left-[25%]">
      <div className='heading'>Complete your Purchase</div>

      {/* TAB SeCtion */}
      <TabSection />
    </section>
  );
}

export default App;
