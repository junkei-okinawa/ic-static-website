<script>
    import profileImage from "../assets/robot.jpg";
</script>

<!-- Nav.svelteの`href="#about"`と紐づく`id`を指定する -->
<section id="about">
    <div class="py-32 text-gray-600 font-ui">
        <h1 class="text-center mb-10 font-medium text-3xl">ABOUT ME</h1>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto">
            <div class="p-2 md:w-1/4 w-full">
                <img src={profileImage} alt="" class="mx-auto mt-24 md:mt-0" />
                <h1
                    class="text-gray-900 mb-10 font-medium text-2xl text-center pt-2 pl-3"
                >
                    junkei
                </h1>
            </div>
            <div class="flex text-left p-8 pl-14 md:w-3/4">
                <pre class="mb-8 text-1xl font-Meiryo whitespace-pre-line">
                    
                    hello.
                    I'm a DevOps Engineer. My favorite language is Python, and I mainly do backend development.
                    I am also interested in blockchain technology, and am learning full-on-chain web application technology using the internet computer platform.
                </pre>
            </div>
        </div>
    </div>
</section>
