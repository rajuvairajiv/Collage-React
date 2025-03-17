import React from 'react';
import "../styles/About.css";
import profilepic from "../assets/profile-pic.jpeg";
import bird1 from "../assets/bird1.jpeg";

const About = () => {
    return (
        <>
            <div className='bannerone'>
                <img src="https://wildwithnature.com/wp-content/uploads/2023/12/PXL_20220721_174929987.MP_-1536x744.jpg" alt="img" className='banner-image' />
                <h1 className='banner-text'>The best nature-focused website</h1>
            </div>

            <section className='container biodata'>
                <h1>Who am I?</h1>
                <div className="div1">
                    <img className="profilePic" src={profilepic} alt="img" />
                </div>
                <div className="div2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda possimus rerum atque dolor soluta aperiam minus temporibus, omnis molestias dolorum! Blanditiis commodi tempora nulla aliquid corrupti eligendi omnis libero quaerat?</p>
                </div>
            </section>
            <section className="moredetail container">
                <h1>Wild With Nature: a work in progress</h1>
                <br />
                <p>The name change hasn’t been the only thing that has evolved over these years. I do this because I care about sharing my love of nature with my community, through stories. It’s not profitable. If I were to track my hours (which I don’t), I estimate that my current community funding would cover around 50% of my time at minimum wage. Making money isn’t my motivation for doing this, though all of the support you give is lovely and lets me know that this work matters to people.</p>
                <br />
                <p>Anyhow, the nice thing about a passion project is that there’s space for it to evolve over time. Since February 2023, I’ve made Wild With Nature fully bilingual, publishing my stories and podcasts in English and in Spanish. I’ve gone from publishing stories once a week to once a month, which has allowed me to spend more time on each one. It’s also allowed me to create much more complicated podcasts, richly illustrated with my ambient nature recordings.</p>

                <br />
                <p>Besides nature and community, I’m also passionate about connections across language boundaries, which is a big part of what has inspired me to make this project bilingual. I also care about honoring and learning from the diversity of human culture and experience. I acknowledge the Native people of western Montana, including the Blackfeet, Salish, and Kootenai, on whose traditional territories I live. It’s an honor to live and learn on this landscape, which has such a rich cultural history extending back for millennia.</p>
                <br />
                <p>-Rajiv Kumar</p>
            </section>
            <br />

            <div className='container ' style={{
                justifyContent: "center",
                alignItems: "center", display: "flex", height: "700px", width: "1000px",
            }}>
                <img className='ostrich' style={{
                    width: "100%", height: "100%"
                }} src={bird1} alt="img" />
            </div>

        </>
    )
}

export default About