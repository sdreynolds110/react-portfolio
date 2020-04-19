import React from "react";
import Card from "./card";

function Home() {
    return (
        <Card>
            <div className="w-100">
                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                    <div class="w-100">
                        <h1 class="mb-0">Stephen
                            <span class="text-primary">Reynolds</span>
                        </h1>
                        <div class="subheading mb-5">· (804) 921 3703 ·
                            <a href="mailto:sdreynolds110@gmail.com">sdreynolds110@gmail.com ·</a>
                        </div>
                        <p class="lead mb-5">Hello, and welcome! My name is Stephen Reynolds, and I'm a prospective web developer. Despite only being involved in coding for a few months, I've grown to enjoy it and appreciate finished products after all the hard work it takes to develop it.</p>
                        <div class="social-icons">
                            <a href="https://www.linkedin.com/in/stephen-reynolds-14490319b/">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/sdreynolds110">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </section> 
            </div>
        </Card>
    )   
}
export default Home;