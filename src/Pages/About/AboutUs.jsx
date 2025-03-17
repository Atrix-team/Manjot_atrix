import React from "react";
import img1 from "../../assets/AboutUs/imgpsh_fullsize_ani.png";
import img2 from "../../assets/AboutUs/imgpsh_fullsize_anim2.png";
import img3 from "../../assets/AboutUs/imgpsh_fullsize_anim1.png";
import img4 from "../../assets/AboutUs/imgpsh_fullsize_anim4.png";
import img5 from "../../assets/AboutUs/imgpsh_fullsize_anim5.png";
import img6 from "../../assets/AboutUs/imgpsh_fullsize_anim3.png";
import OurSolution from "../../Components/OurSolution";
import OurPortfolio from "../../Components/OurPortfolio";


const AboutUs = () => {
  return (
    <>

      <div className="container mx-auto mt-42 max-w-[1600px] w-[80%]">
        <div className="row flex gap-3  mx-[-15px] ">
          <div className="col-6  ">
            <div className="img">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="col-3 ">
            <div className="img">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="col-3 ">
            <div className="img">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>

        <div className="row flex gap-3 mt-4 mx-[-15px] ">
          <div className="col-3  ">
            <div className="img">
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="col-6  ">
            <div className="img">
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="col-3  ">
            <div className="img">
              <img src={img6} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-42 max-w-[1600px] w-[80%]">
        <div className="row text-center mx-[-15px]">
          <div className="col px-[15px] font-bold ">
            <h1>About US</h1>
          </div>
         </div> 

          <div className="row text-center  w-[80%] mx-auto ">
            <div className="col">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum earum explicabo quibusdam quam consequuntur,
                  repudiandae nisi dolorem, debitis perferendis recusandae at
                  accusantium expedita ducimus. Unde voluptates est deserunt
                  nulla dicta. Quis fugit deserunt hic. Odit, officia. Labore
                  accusamus voluptas consequatur itaque sint, temporibus quis
                  saepe aspernatur cumque! Eos inventore numquam assumenda!
                  Rerum enim vitae magni perspiciatis laborum, alias amet
                  doloremque? Illum iusto pariatur sunt sequi, architecto veniam
                  corrupti reiciendis? Natus, ipsum iste asperiores qui, facere,
                  quasi velit commodi aspernatur sit doloribus praesentium
                  dolorum laudantium tempora sint? Commodi voluptatum quasi
                  dolore!
                </p>
            </div>
          </div>
        </div>
 

        <div className="container mx-auto mt-32 max-w-[1600px] w-[80%]  ">
          <div className="row  flex-col grid grid-cols-12 space-x-22 ">
            <div className="col-span-6 flex items-center justify-center ">
              <h2>Our Story</h2>
            </div>
            <div className="col-span-6 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              molestiae consectetur obcaecati praesentium laborum cupiditate?
              Pariatur, architecto corrupti quibusdam sapiente maxime, dolorem,
              is mollitia    voluptatum iste incidunt placeat consequatur iusto velit ducimus
              minus possimus perferendis illo nostrum doloribus nobis magni
              alias eos sequi? Ratione, soluta. Animi ex assumenda iste delectus
              sunt aliquid explicabo suscipit quae excepturi facilis molestiae
              vero recusandae, voluptas sit voluptatum blanditiis rerum ipsum!
              Animi, sapiente. Ex laudantium explicabo et facere, corporis
              expedita!
            </div>
          </div>

          <div className="row   mt-12 flex-col grid grid-cols-12 space-x-22 ">
            <div className="col-span-6 flex items-center  text-center justify-center ">
              <h2>Mission</h2>
            </div>
            <div className="col-span-6 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              molestiae consectetur obcaecati praesentium laborum cupiditate?
              Pariatur, architecto corrupti quibusdam sapiente maxime, dolorem,
             isci, praesentium excepturi eius dignissimos aut quasi facilis mollitia
              voluptatum iste incidunt placeat consequatur iusto velit ducimus
              minus possimus perferendis illo nostrum doloribus nobis magni
              alias eos sequi? Ratione, soluta. Animi ex assumenda iste delectus
              sunt aliquid explicabo suscipit quae excepturi facilis molestiae
              vero recusandae, voluptas sit voluptatum blanditiis rerum ipsum!
              Animi, sapiente. Ex laudantium explicabo et facere, corporis
              expedita!
            </div>
          </div>

          <div className="row   mt-12 flex-col grid grid-cols-12 space-x-22 ">
            <div className="col-span-6 flex items-center  text-center justify-center ">
              <h2>Vision</h2>
            </div>
            <div className="col-span-6 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              molestiae consectetur obcaecati praesentium laborum cupiditate?
              Pariatur, architecto corrupti quibusdam sapiente maxime, dolorem,
         lis molestiae
              vero recusandae, voluptas sit voluptatum blanditiis rerum ipsum!
              Animi, sapiente. Ex laudantium explicabo et facere, corporis
              expedita!
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-42 max-w-[1600px] w-[80%]">
          <div className="row  mt-12 flex-col grid grid-cols-12 space-x-96 ">
            <div className="col-span-12 text-center relative z-10 mt-12  ">
              <h2>Our Services</h2>
            </div>
          </div>

          <div className="row  flex-col grid grid-cols-12 space-x-96  ">
            <div className=" Our Solution Process col-span-12 ">
              <OurSolution />
            </div>
          </div>
        </div>

       <div className="portfolio-sec-heading text-center relative z-10 mt-42 ">
        <h2>Explore Our Work</h2>
       </div>
      <div className="Our Solution Process  ">
        <OurPortfolio />
      </div>

      <div className="marquee">
    
      </div>









    </>
  );
};

export default AboutUs;
