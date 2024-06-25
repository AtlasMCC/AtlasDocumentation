import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  return (


<section class="bg-center bg-cover bg-no-repeat bg-[url('/static/img/atlasbackground.png')] bg-gray-700 bg-blend-multiply">


  <div class="px-4 mx-auto max-w-screen-xl text-center py-0">

    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
    
    <video class="px-auto mx-auto max-w-screen border-1 border-gray-200 rounded-lg shadow py-0 lg:py-0" alt="" playsinline autoplay="autoplay" loop="loop" muted>
      <source src={require('/home.mp4').default} type="video/mp4"/>
    </video>

    <div class=" space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

      <div class="p-5">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">AtlasNation</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-200">Bienvenue</p>
        <a href="#joinserver" class="group/hoveranimation no-underline hover:no-underline inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg class="transition transform group-hover/hoveranimation:translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none mx-1 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>
          Commencer l'aventure
          <svg class="transition transform group-hover/hoveranimation:translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none mx-1 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>

        </a>

      </div>

    </div>
  </div>
</section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Documentation d'AtlasMC">
      <HomepageHeader />
      <main>

      </main>
    </Layout>
  );
}