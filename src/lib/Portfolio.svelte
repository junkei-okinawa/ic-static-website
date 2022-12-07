<script>
    let projects = [
        {
            name: "ICP Basic DEX ",
            url: "https://afwvz-cyaaa-aaaap-qauqa-cai.ic0.app/",
        },
        {
            name: "NEAR Bike Share Dapp",
            url: "https://near-bikeshare-dapp-junkei.netlify.app/",
        },
        {
            name: "NEAR Election Dapp",
            url: "https://near-election-dapp-junkei.netlify.app/",
        },
        {
            name: "ASTAR Socialfi Dapp",
            url: "https://astar-socialfi-frontend-kappa.vercel.app/",
        },
    ];
</script>

<!-- Nav.svelteの`href="#portfolio"`と紐づく`id`を指定する -->
<section id="portfolio">
    <div class="container mx-auto">
        <div class="py-32 text-gray-600 font-ui">
            <h1 class="text-center mb-10 font-medium text-3xl">PORTFOLIO</h1>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto">
                <!-- `each`ブロックでループ処理を行う -->
                {#each projects as project}
                    <div class="p-2 md:w-1/3 w-full">
                        <div
                            class="bg-gray-400 text-white hover:bg-gray-800 cursor-pointer rounded p-4 text-center "
                        >
                            <a href={project.url}>{project.name}</a>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
