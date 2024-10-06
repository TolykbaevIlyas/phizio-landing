import "./App.css";
import Cuts from "./assets/img/Cuts";
import Logo from "./assets/img/Logo";
import Massage from "./assets/img/Massage.png";
import Massage2 from "./assets/img/Massage2.png";
import Massage3 from "./assets/img/Massage3.png";
import Massage4 from "./assets/img/Massage4.png";

function App() {
  return (
    <main className="">
      <header className="bg-[#292929] flex mx-[100px]  mt-10 p-5 border rounded-full border-none justify-between">
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
      <section className="mx-[100px]">
        <div>
          <h1 className="text-center pt-12 text-[96px] leading-[100px] font-medium">
            Physiotherapist & massage therapist Viktor Lazarev
          </h1>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="bg-[#292929] p-10 rounded-3xl flex flex-col justify-between">
            <Cuts />
            <div className="flex gap-10 flex-col">
              <p className="text-[24px] font-medium w-full">
                I help young people with back problems caused by long hours in
                front of a computer or injuries
              </p>
              <button className="ButtonMain py-5">View massage programs</button>
            </div>
          </div>
          <img src={Massage} alt="fee" />
        </div>
      </section>
      <section className="flex flex-col bg-[#E8E8E8] text-center mt-32 rounded-[60px]">
        <h3 className="text-[95px] font-semibold pt-20 text-black">
          My methodology
        </h3>
        <p className="max-w-4xl m-auto text-[24px] font-medium text-black">
          My vocation is not only to treat but also to prevent problems. Regular
          massage sessions are not only a pleasant pleasure, but also an
          effective way to reduce the risk of pain syndromes. I strive not just
          to treat, but to prevent problems
        </p>
        <div className="MethodologyGrid mx-[100px] gap-10 pt-20">
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
      <section className="flex flex-col text-center mt-32">
        <h3 className="text-[95px] font-semibold">Sessions</h3>
        <p className="max-w-4xl m-auto text-[24px] font-medium ">
          I take an individualized approach to each client, taking into account
          their unique physiological characteristics and goals
        </p>
        <div className="flex flex-col gap-10 mx-[100px] mt-10">
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
                <button className="ButtonMain py-5">Sign up</button>
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
                <button className="ButtonMain py-5">Sign up</button>
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
                <button className="ButtonMain py-5">Sign up</button>
              </div>
            </div>
            <div className="Sessio2nElement flex bg-[#292929] p-10 gap-10 ">
              <h4 className="text-[40px] font-semibold">Acupuncture</h4>
              <div className="flex flex-col gap-5 text-left">
                <p className="text-[16px] font-medium max-w-80">
                  This method involves using fine needles to stimulate certain
                  points on the body, which can help relieve back pain and back
                  tension{" "}
                </p>
                <p>34 $ / 60 min</p>
                <p>44 $ / 90 min</p>
                <button className="ButtonMain py-5">Sign up</button>
              </div>
            </div>
            <img className="Session2Img" src={Massage4} alt="" />
          </div>
        </div>
      </section>
      <footer></footer>
    </main>
  );
}

export default App;
