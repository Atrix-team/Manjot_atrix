import React, { useEffect, Suspense, useRef, useState } from 'react';
import './home.css';
import '../CSS/tying.css';
import ParticleEffect from '../Components/ParticleEffect';
import TypewriterEffect from '../Components/TyingWriter';
import LogoSlider from '../Components/marqueelogo/LogoSlider';
import Button from '../Components/Button';
import useIntersectionObserver from '../Components/useIntersectionObserver'; 
import AboutImage from "../assets/AboutImage.jpg"

// Lazy load all components
const OurServices = React.lazy(() => import('../Components/OurServices'));
const CountSection = React.lazy(() => import('../Components/CountSection'));
const OurSolution = React.lazy(() => import('../Components/OurSolution'));
const OurPortfolio = React.lazy(() => import('../Components/OurPortfolio'));
const Technology = React.lazy(() => import('../Components/Technology'));
const LetterMarquee = React.lazy(() => import('../Components/marqueelogo/LetterMarquee'));


const Home = () => {
  // Create refs for each component
  const ourServicesRef = useRef(null);
  const countSectionRef = useRef(null);
  const ourSolutionRef = useRef(null);
  const ourPortfolioRef = useRef(null);
  const technologyRef = useRef(null);
  const letterMarqueeRef = useRef(null);

  // State to track which components are visible
  const [visibleComponents, setVisibleComponents] = useState({
    ourServices: false,
    countSection: false,
    ourSolution: false,
    ourPortfolio: false,
    technology: false,
    letterMarquee: false,
  });

  // Use the custom hook for each component
  const isOurServicesVisible = useIntersectionObserver(ourServicesRef, { threshold: 0.1 });
  const isCountSectionVisible = useIntersectionObserver(countSectionRef, { threshold: 0.1 });
  const isOurSolutionVisible = useIntersectionObserver(ourSolutionRef, { threshold: 0.1 });
  const isOurPortfolioVisible = useIntersectionObserver(ourPortfolioRef, { threshold: 0.1 });
  const isTechnologyVisible = useIntersectionObserver(technologyRef, { threshold: 0.1 });
  const isLetterMarqueeVisible = useIntersectionObserver(letterMarqueeRef, { threshold: 0.1 });

  // Update visible components state
  useEffect(() => {
    if (isOurServicesVisible) {
      setVisibleComponents((prev) => ({ ...prev, ourServices: true }));
    }
  }, [isOurServicesVisible]);

  useEffect(() => {
    if (isCountSectionVisible) {
      setVisibleComponents((prev) => ({ ...prev, countSection: true }));
    }
  }, [isCountSectionVisible]);

  useEffect(() => {
    if (isOurSolutionVisible) {
      setVisibleComponents((prev) => ({ ...prev, ourSolution: true }));
    }
  }, [isOurSolutionVisible]);

  useEffect(() => {
    if (isOurPortfolioVisible) {
      setVisibleComponents((prev) => ({ ...prev, ourPortfolio: true }));
    }
  }, [isOurPortfolioVisible]);

  useEffect(() => {
    if (isTechnologyVisible) {
      setVisibleComponents((prev) => ({ ...prev, technology: true }));
    }
  }, [isTechnologyVisible]);

  useEffect(() => {
    if (isLetterMarqueeVisible) {
      setVisibleComponents((prev) => ({ ...prev, letterMarquee: true }));
    }
  }, [isLetterMarqueeVisible]);

  useEffect(() => {
    const elements = document.querySelectorAll('.moveWithMouse');

    const moveElements = (e) => {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const moveX = (mouseX - (rect.left + rect.width / 100)) / 160;
        const moveY = (mouseY - (rect.top + rect.height / 100)) / 160;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', moveElements);

    return () => {
      window.removeEventListener('mousemove', moveElements);
    };
  }, []);




  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto max-w-full overflow-hidden">
        <div className="relative w-full text-(--whitelight) hero_section">
          <div className="pointer-events-none absolute inset-0 h-full">
            <ParticleEffect />
          </div>
          <div className="flex justify-center items-center min-h-screen py-46">
            <div className="text-center relative">
              <h1 className="text-(--whitelight) mt-5 text-6xl md:text-8xl lg:text-9xl">
                <div className="relative inline-block">
                  <div className="font-bold tracking-wider">We deliver</div>
                  <div className="absolute bottom-[4%] -right-[20%] text-center z-20 animateFromTop tracking-normal">
                    <p className="bg-(--white) text-(--black) border font-body border-transparent rounded-4xl md:px-8  px-2 py-1 text-sm md:text-2xl -rotate-7 font-bold moveWithMouse">
                      Marketing
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center text-center">
                  <div className="relative inline-block">
                    <div className="font-bold tracking-wider">personal</div>
                    <div className="absolute -top-[2%] md:top-[0%] left-[0%] text-center z-20 animateFromTop tracking-normal">
                      <p className="bg-(--green) text-(--black) font-body border border-transparent rounded-4xl md:px-8  px-2 py-1 text-sm md:text-2xl rotate-5 font-bold moveWithMouse">
                        Web Development
                      </p>
                    </div>
                  </div>
                  <div className="relative typewiter-wraper ml-10 text-5xl w-[45rem] font-normal rounded-full px-16 mt- font-body">
                    <TypewriterEffect
                      text="  innovative, growing, creative"
                      speed={170}
                      deleteSpeed={100}
                      delay={150}
                    />
                  </div>
                </div>

                <div className="relative inline-block">
                  <div className="font-bold tracking-wider">solutions</div>
                  <div className="absolute bottom-[2%] md:bottom-[10%] -left-[30%] text-center z-20 animateFromTop tracking-normal">
                    <p className="bg-(--blue) text-(--black) border   font-body border-transparent rounded-4xl md:px-8  px-2 py-1 text-sm md:text-2xl rotate-12 font-bold moveWithMouse">
                      Brand Identity
                    </p>
                  </div>
                </div>
              </h1>

              <div className="text-center z-20 flex justify-center">
                <p className="text-(--white) px-10 py-2 text-xl mt-12 font-semibold w-[100%] max-w-[950px]">
                  Founded with a passion for innovation, our team of young talents brings a fresh perspective to the world of IT and beyond, offering unique and creative solutions tailored to meet the evolving needs of our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* About Us Section */}
      <div className="bg-(--darkblack) py-14  container mx-auto max-w-full">
        <LogoSlider />

        <div className="bg-(--darkblack) p-">
          <h1 className="font-bold flex justify-center md:right-60 top-14 relative text-8xl md:text-9xl text-transparent p-" style={{ WebkitTextStroke: "1px white" }}>About us</h1>
          <div className="md:flex items-center justify-center">
            <img src= {AboutImage} className="h-full  w-full max-w-[1060px]" alt="About Us" />
            <div className="text-(--white) md:-left-16 relative w-full max-w-[565px]  p-2">
              <p className="text-xl font-semibold text-(--gray) mb-2">Our Vision</p>
              <h5 className="text-5xl font-bold mb-5">Unlock Revenue Growth for Your Business</h5>
              <h6 className="text-2xl font-semibold mb-10">Our goal is to make it as easy as possible for you to walk away with the solution that suits your needs perfectly.</h6>
              <div className="border border-(--black) mb-5"></div>
              <p className="text-md text-(--gray) mb-4">Through our years of experience, we’ve also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>
              <Button mybtn={"Learn More"} />
            </div>
          </div>
        </div>
      </div>

      {/* Lazy-Loaded Components with Intersection Observer */}
      <div ref={ourServicesRef}>
        {visibleComponents.ourServices ? (
          <Suspense fallback={<div className="text-(--white) text-center py-20">Loading Our Services...</div>}>
            <OurServices />
          </Suspense>
        ) : (
          <div className="text-(--white) text-center py-20">Loading Our Services...</div>
        )}
      </div>

      <div ref={countSectionRef}>
        {visibleComponents.countSection ? (
          <Suspense fallback={<div className="text-(--white) text-center py-20">Loading Count Section...</div>}>
            <CountSection />
          </Suspense>
        ) : (
          <div className="text-(--white) text-center py-20">Loading Count Section...</div>
        )}
      </div>

      <div ref={ourSolutionRef}>
        {visibleComponents.ourSolution ? (
          <Suspense fallback={<div className="text-(--white) text-center py-20">Loading Our Solution...</div>}>
            <OurSolution />
          </Suspense>
        ) : (
          <div className="text-(--white) text-center py-20">Loading Our Solution...</div>
        )}
      </div>

      <div ref={ourPortfolioRef}>
        {visibleComponents.ourPortfolio ? (
          <Suspense fallback={<div className="text-(--white) text-center py-20">Loading Our Portfolio...</div>}>
            <OurPortfolio />
          </Suspense>
        ) : (
          <div className="text-(--white) text-center py-20">Loading Our Portfolio...</div>
        )}
      </div>

      <div ref={technologyRef}>
        {visibleComponents.technology ? (
          <Suspense fallback={<div className="text-(--white) text-center py-20">Loading Technology...</div>}>
            <Technology />
          </Suspense>
        ) : (
          <div className="text-(--white) text-center py-20">Loading Technology...</div>
        )}
      </div>

      <div ref={letterMarqueeRef}>
        {visibleComponents.letterMarquee ? (
          <Suspense fallback={<div className="text-(--white) text-center py-20">Loading Letter Marquee...</div>}>
            <LetterMarquee />
          </Suspense>
        ) : (
          <div className="text-(--white) text-center py-20">Loading Letter Marquee...</div>
        )}
      </div>
    </>
  );
};

export default Home;