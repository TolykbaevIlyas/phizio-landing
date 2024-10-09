import "./App.css";
import Cuts from "./assets/img/Cuts";
import Logo from "./assets/img/Logo";
import Massage from "./assets/img/Massage.png";
import Massage2 from "./assets/img/Massage2.png";
import Massage3 from "./assets/img/Massage3.png";
import Massage4 from "./assets/img/Massage4.png";
import Doctor from "./assets/img/Doctor.png";
import Mapp from "./assets/img/Map.png";
import Media from "./assets/img/Media.png";

function App() {
  return (
    <main className="w-full">
      <header className="bg-[#292929] flex mx-[100px]  mt-10 p-5 border rounded-full border-none justify-between max-xl:hidden">
        <div className="flex text-center items-center gap-10">
          <div className="flex gap-10">
            <Logo />
            <h1 className="text-[24px] font-semibold">Dr.Lazarev</h1>
          </div>
          <p className="text-[16px] font-medium">Prague, 10 Pražská str</p>
        </div>
        <nav className="flex gap-20">
          <ul className="flex items-center gap-5">
            <li>session</li>
            <li>contacts</li>
            <li>reviews</li>
            <li>About me</li>
          </ul>
          <button className="ButtonMain">Contact me</button>
        </nav>
      </header>
      <section className="max-w-[1320px] flex flex-col justify-center m-auto">
        <div>
          <h1 className="text-center pt-12 text-[96px] leading-[100px] font-medium max-sm:text-[36px] max-sm:leading-[36px]">
            Physiotherapist & massage therapist Viktor Lazarev
          </h1>
        </div>
        <div className="flex gap-10 mt-10 max-sm:flex-col">
          <div className="bg-[#292929] p-10 rounded-3xl flex flex-col justify-between max-w-[424px] min-h-[462px] max-sm:max-w-full">
            <Cuts />
            <div className="flex gap-10 flex-col">
              <p className="text-[24px] font-medium w-full">
                I help young people with back problems caused by long hours in
                front of a computer or injuries
              </p>
              <button className="ButtonMain py-5">View massage programs</button>
            </div>
          </div>
          <img
            src={Massage}
            alt="fee"
            className="w-full h-auto max-w-[872px] max-xl:max-w-[400px] max-lg:max-w-[320px] max-sm:max-w-full object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col bg-[#E8E8E8] text-center mt-32 rounded-[60px] w-full m-auto max-sm:mt-[60px] max-sm:gap-5">
        <h3 className="text-[95px] font-semibold pt-20 text-black max-sm:text-[32px] max-sm:pt-10">
          My methodology
        </h3>
        <p className="max-w-4xl m-auto text-[24px] font-medium text-black max-sm:text-[15px] max-sm:max-w-[351px]">
          My vocation is not only to treat but also to prevent problems. Regular
          massage sessions are not only a pleasant pleasure, but also an
          effective way to reduce the risk of pain syndromes. I strive not just
          to treat, but to prevent problems
        </p>
        <div className="MethodologyGrid max-w-[1320px] m-auto gap-10 pt-20">
          <div className="MethodologyElement">
            <Logo />
            <div className="MethodologyTextElement">
              <h4 className="MethodologyMainText">
                Body harmony and health promotion
              </h4>
              <p className="MethodologyAdditionalText">
                My back massage technique is not only focused on pain relief and
                overall health. I try to rebalance the body through massage,
                which helps to n ormalize it and promote wellness
              </p>
            </div>
          </div>
          <div className="MethodologyElement">
            <Logo color="#000" />
            <div className="MethodologyTextElement">
              <h4 className="MethodologyMainText">
                Prevention of musculoskeletal problems
              </h4>
              <p className="MethodologyAdditionalText">
                My vocation is not only to treat, but also to prevent problems
                Regular massage sessions are not only a pleasant pleasure, but
                also an effective way to reduce the risk of pain syndromes. I
                strive to prevent problems, not just treat them
              </p>
            </div>
          </div>
          <div className="MethodologyElement">
            <Logo />
            <div className="MethodologyTextElement">
              <h4 className="MethodologyMainText">
                Improving immunity through back care
              </h4>
              <p className="MethodologyAdditionalText">
                Back massage has a direct effect on the immune systemMy massage
                technique not only helps to relieve pain and tension, but also
                to boost your immune system. Regular massage sessions can help
                your body fight stress and illness more effectively
              </p>
            </div>
          </div>
          <div className="MethodologyElement">
            <Logo />
            <div className="MethodologyTextElement">
              <h4 className="MethodologyMainText">
                Pain from sitting down to work and how to deal with them
              </h4>
              <p className="MethodologyAdditionalText">
                My practice focuses on young adults who suffer from back pain
                caused by long hours in front of a computer or due to injury. I
                work to help them recover and find comfort in their daily lives
              </p>
            </div>
          </div>
          <img src={Massage2} alt="massage2" className="MethodologyImg" />
        </div>
      </section>
      <section className="flex flex-col text-center mt-32 max-sm:mt-20">
        <h3 className="text-[95px] font-semibold max-sm:text-[32px]">
          Sessions
        </h3>
        <p className="max-w-4xl m-auto text-[24px] font-medium max-sm:text-[15px] max-sm:max-w-[351px]">
          I take an individualized approach to each client, taking into account
          their unique physiological characteristics and goals
        </p>
        <div className="flex flex-col gap-10 max-w-[1320px] m-auto mt-10">
          <div className="SessionBlock">
            <div className="SessionElement flex bg-[#292929] p-10 gap-10 ">
              <h4 className="text-[40px] font-semibold">Acupuncture</h4>
              <div className="flex flex-col gap-5 text-left">
                <p className="text-[16px] font-medium max-w-80">
                  This method involves using fine needles to stimulate certain
                  points on the body, which can help relieve back pain and back
                  tension{" "}
                </p>
                <p>34 $ / 60 min</p>
                <p>44 $ / 90 min</p>
                <button className="ButtonMain py-5 ButtonSession">
                  Sign up
                </button>
              </div>
            </div>
            <div className="SessionElement flex bg-[#292929] p-10 gap-10 ">
              <h4 className="text-[40px] font-semibold">Acupuncture</h4>
              <div className="flex flex-col gap-5 text-left">
                <p className="text-[16px] font-medium max-w-80">
                  This method involves using fine needles to stimulate certain
                  points on the body, which can help relieve back pain and back
                  tension{" "}
                </p>
                <p>34 $ / 60 min</p>
                <p>44 $ / 90 min</p>
                <button className="ButtonMain py-5 ButtonSession">
                  Sign up
                </button>
              </div>
            </div>
            <img className="SessionImg" src={Massage3} alt="" />
          </div>
          <div className="Session2Block">
            <div className="Session2Element flex bg-[#292929] p-10 gap-10 ">
              <h4 className="text-[40px] font-semibold">Acupuncture</h4>
              <div className="flex flex-col gap-5 text-left">
                <p className="text-[16px] font-medium max-w-80">
                  This method involves using fine needles to stimulate certain
                  points on the body, which can help relieve back pain and back
                  tension{" "}
                </p>
                <p>34 $ / 60 min</p>
                <p>44 $ / 90 min</p>
                <button className="ButtonMain py-5 ButtonSession">
                  Sign up
                </button>
              </div>
            </div>
            <div className="Session2Element flex bg-[#292929] p-10 gap-10 ">
              <h4 className="text-[40px] font-semibold">Acupuncture</h4>
              <div className="flex flex-col gap-5 text-left">
                <p className="text-[16px] font-medium max-w-80">
                  This method involves using fine needles to stimulate certain
                  points on the body, which can help relieve back pain and back
                  tension{" "}
                </p>
                <p>34 $ / 60 min</p>
                <p>44 $ / 90 min</p>
                <button className="ButtonMain py-5 ButtonSession">
                  Sign up
                </button>
              </div>
            </div>
            <img className="Session2Img" src={Massage4} alt="" />
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center items-center m-auto mt-32 gap-10 max-sm:gap-4 max-sm:mt-10 max-w-[1320px]">
        <h3 className="text-[95px] max-sm:text-[32px]">About me</h3>
        <p className="text-[24px] leading-[28.8px] max-w-[584px] max-sm:text-[15px] max-sm:max-w-[349px] ">
          My calling is to help people find health and well-being through a
          holistic approach to physical rehabilitation and therapy
        </p>
        <div className="AboutMeGrid text-left">
          <div className="flex flex-col gap-[20px] bg-[#292929] p-10 rounded-[24px] max-sm:mx-[30px]">
            <h4 className="text-[40px] max-sm:text-[24px]">Victor Lazarev</h4>
            <p className="text-[16px] max-sm:text-[15px]">
              I am a massage therapist with 12 years of experience in physical
              therapy. This allows me to successfully apply advanced methods and
              techniques adopted in the USA and Europe.
            </p>
            <p className="text-[16px] max-sm:text-[15px]">
              I take an individualized approach to each client, taking into
              account their unique physiological characteristics and goals.
            </p>
            <p className="text-[16px] max-sm:text-[15px]">
              In the process, I strive not only to alleviate physical ailments,
              but also to create an atmosphere of harmony and relaxation.
            </p>
            <p className="text-[16px] max-sm:text-[15px]">
              I have two advanced degrees in this field.
            </p>
            <p className="text-[16px] max-sm:text-[15px]">
              key components of our well-being. In my practice as a physical
              therapist and massage therapist, I strive to help people achieve
              this harmony. Creating individualized recovery programs and body
              care plans for each patient.
            </p>
            <div className="flex gap-5 max-sm:flex-col mt-auto">
              <button className="ButtonMain py-3">Contact me</button>
              <button className="Button py-3">View diplomats</button>
            </div>
          </div>
          <img
            src={Doctor}
            alt="doc"
            className="max-sm:max-w-[380px] text-center m-auto"
          />
        </div>
      </section>
      <section className="max-w-[1320px] items-center m-auto text-center mt-20">
        <h2 className="text-[95px] max-sm:text-[32px]">Contacts</h2>
        <div className="mt-20 relative w-full max-sm:flex max-sm:flex-col max-sm:items-center">
          <img
            src={Mapp}
            alt="Map"
            className="relative w-full h-auto max-sm:w-full"
          />
          <div className="bg-[#212121] max-w-[452px] max-h-[253px] z-50 rounded-[24px] p-10 absolute max-sm:relative max-sm:mt-5 max-sm:w-full max-sm:max-w-none left-[40px] max-sm:left-0 bottom-[40px] max-sm:bottom-0 max-sm:bg-[#292929]">
            <Cuts />
            <h2 className="text-[40px] max-sm:text-[24px]">
              Prague, 10 Pražská str.
            </h2>
            <p className="text-[16px] max-sm:text-[14px]">
              +420 (456) 200-10-41
            </p>
            <p className="text-[16px] max-sm:text-[14px]">
              lazarevnfo@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] items-center m-auto text-center mt-20">
        <h3 className="text-[95px] max-sm:text-[32px]">Testimonials</h3>
        <div className="TestimonalsGrid mt-10">
          <div className="bg-[#292929] rounded-[24px] p-5 text-left flex flex-col gap-5">
            <div className="flex justify-between">
              <h5>Olga Pushkina</h5>
              <p>4.8</p>
            </div>
            <p>
              I had a massage on the recommendation of friends and I have never
              regretted it. He is a real professional. You can feel that he
              works with love for his profession. I will contact him again!
            </p>
          </div>
          <div className="bg-[#292929] rounded-[24px] p-5 text-left flex flex-col gap-5">
            <div className="flex justify-between">
              <h5>Olga Pushkina</h5>
              <p>4.8</p>
            </div>
            <p>
              I had a massage on the recommendation of friends and I have never
              regretted it. He is a real professional. You can feel that he
              works with love for his profession. I will contact him again!
            </p>
          </div>
          <div className="bg-[#F28B63] text-black rounded-[24px] p-5 text-left flex flex-col gap-5">
            <div className="flex justify-between">
              <h5>Olga Pushkina</h5>
              <p>4.8</p>
            </div>
            <p>
              I had a massage on the recommendation of friends and I have never
              regretted it. He is a real professional. You can feel that he
              works with love for his profession. I will contact him again!
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-[#E8E8E8] text-black p-10 mt-32 rounded-t-[60px] max-sm:mt-20">
        {/* <div className="footer_wrapper flex flex-col justify-between"> */}
        <div className="footer_logo flex gap-5 ">
          <Logo />
          <p className="text-[24px] font-bold max-sm:text-[18px]">
            Dr. Lazarev
          </p>
        </div>
        <p className="footer_year mt-auto">2023</p>
        {/* </div> */}
        <div className="footer_nav flex flex-col mt-10 gap-10 max-sm:gap-5 max-sm:mb-5">
          <p>About me</p>
          <p>Sessions</p>
          <p>rewiews</p>
        </div>

        <div className=" footer_info flex flex-col gap-10 text-right items-end">
          <p className="text-[20px] font-bold">+420 (456) 200-10-41</p>
          <p className="text-[20px] font-bold">lazarevnfo@gmail.com</p>
          <img src={Media} alt={"Media"} className="max-w-[62px]" />
          <p>Privacy Policy</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
