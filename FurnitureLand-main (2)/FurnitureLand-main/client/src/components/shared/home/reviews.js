import U1 from '../../../image/cus1.png';
import U2 from '../../../image/cus2.png';
import U3 from '../../../image/cus3.png';

export default function reviews() {
  return (
    <div class="max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl  tracking-tight text-gray-900 text-center">
        Reviews
      </h2>
      <div class="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
        <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p class="text-gray-600 dark:text-white">
            <span class="font-bold text-indigo-500 text-lg">“</span>A great
            experience shopping from here. The only thing i would recommend is a
            delivery service in the long run. Otherwise, it's a 5 star from me!
            <span class="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <span href="#" class="block relative">
              <img
                alt="profil"
                src={U1}
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </span>
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-indigo-500 text-sm">
                Harry Wittek
              </span>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p class="text-gray-600 dark:text-white">
            <span class="font-bold text-indigo-500 text-lg">“</span>I can find
            most, if not all furnitures in this website. The seller have done a
            great job with the service as well as their prices.
            <span class="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <span class="block relative">
              <img
                alt="profil"
                src={U2}
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </span>
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-indigo-500 text-sm">
                Emilia Fischer
              </span>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p class="text-gray-600 dark:text-white">
            <span class="font-bold text-indigo-500 text-lg">“</span>
            Shopping from this website has been nothing but a good experience
            for me. The sellers are very friendly and make you feel very
            welcome.
            <span class="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <span class="block relative">
              <img
                alt="profil"
                src={U3}
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </span>
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-indigo-500 text-sm">
                Jean Miguel
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
