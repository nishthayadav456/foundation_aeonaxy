import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoMdBookmarks } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { RxResume } from "react-icons/rx";

function App() {
  return (
    <>
      <div>
        <nav class="shadow-md w-full h-14 flex justify-between  px-8 mt-3">
          <div class="h-12 w-44">
            <img
              class="h-12 w-44"
              src="https://lever-client-logos.s3-us-west-2.amazonaws.com/b3943d3b-d47e-4ac8-873d-0b6502f03bf2-1587418670025.png"
              alt="Not found"
            />
          </div>
          <div class="md:block hidden">
            <div class="md:flex justify-around hidden pt-3 w-80">
              <div class="flex items-center">
                <IoHome class="w-5 h-5 mr-1" />
                Home
              </div>

              <div class="flex items-center ml-4">
                <IoMdBookmarks class="w-5 h-5 mr-1" />
                Courses
              </div>
              <div class="flex items-center ml-4">
                <SlCalender class="w-5 h-5 mr-1" />
                Today
              </div>
            </div>
          </div>
          <div class="md:block hidden relative">
            <input
              type="text"
              class="h-8  pl-8 pr-2 py-1 mt-2 shadow-md order-gray-100 bg-slate-100 rounded w-96"
            />
            <IoSearch class="absolute top-6  transform -translate-y-1/2 h-4 w-5 text-gray-500" />
          </div>
          <div class="md:block hidden w-40 mt-2">
            <button class="md:border-2 uppercase font-bold text-sm border-green-600 h-9 w-40 rounded text-lime-600">
              Start trial
            </button>
          </div>
          <div class="md:block hidden">
            <div class="flex mt-3">
              <p class="font-bold h-5 w-2 ">2</p>

              <img
                class="h-4 w-6 mt-1.5"
                src="https://www.svgrepo.com/show/59169/lightning.svg"
                alt="not found"
              />
            </div>
          </div>
          <div class="mb-3">
            <a class="text-4xl" href="#">
              &#8801;
            </a>
          </div>
        </nav>
        <div class="flex justify-around flex-wrap mt-10">
          <div class="border border-slate-400 flex justify-around h-40 p-10">
            <div class="flex border-8 border-yellow-500 rounded-full h-20 w-20 p-3">
              <p class="font-bold text-2xl ml-1">2</p>
              <img
                class="h-6 w-8 mt-2 mr-6"
                src="https://www.svgrepo.com/show/59169/lightning.svg"
                alt="not found"
              />
            </div>
            <div class="ml-5">
              <p class="font-bold text-2xl">You're on a 2-day streak!</p>
              <div class="flex justify-around gap-5">
                <p class="flex gap-1">
                  <span class="font-bold text-sm">2</span>
                  <p class="font-semibold text-slate-700 text-sm">
                    Longest streak
                  </p>
                </p>
                <p class="flex gap-1">
                  <span class="font-bold text-sm">19</span>
                  <p class="font-semibold text-slate-700 text-sm">
                    Lessons Completed
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div class="border border-slate-400 flex justify-around h-40 p-5">
            <div>
              <p class="font-bold text-center">W</p>
              <img
                class="h-6 w-8 mt-2"
                src="https://www.svgrepo.com/show/59169/lightning.svg"
                alt="not found"
              />
            </div>
            <div class="border-2 border-yellow-500 rounded-full h-24 w-14">
              <p class="font-bold text-center">Th</p>
              <img
                class="h-6 w-8 mt-2 ml-2"
                src="https://www.svgrepo.com/show/59169/lightning.svg"
                alt="not found"
              />
            </div>
            <div>
              <p class="font-bold text-center">F</p>
              <img
                class="h-6 w-8 mt-2"
                src="https://www.svgrepo.com/show/59169/lightning.svg"
                alt="not found"
              />
            </div>
            <div>
              <p class="font-bold text-center">S</p>
              <img
                class="h-6 w-8 mt-2"
                src="https://www.svgrepo.com/show/59169/lightning.svg"
                alt="not found"
              />
            </div>
            <div>
              <p class="font-bold text-center">Su</p>
              <img
                class="h-6 w-8 mt-2"
                src="https://www.svgrepo.com/show/59169/lightning.svg"
                alt="not found"
              />
            </div>
          </div>
        </div>

        <p class="font-bold md:text-xl mt-14  text-2xl md:pl-80">
          Pick up where you left off
        </p>
        <div className="flex justify-around h-[250px] mt-5">
          <div class="border border-slate-300 md:h-[230px] p-3 rounded flex justify-around h-[450px] flex-wrap">
            <div>
              <img
                class="h-[200px] w-[350px] rounded"
                src="https://ds055uzetaobb.cloudfront.net/chapter/Computer_Science_01_1-GA8N5S.png"
                alt="not found"
              />
            </div>

            <div class="md:ml-9 md:mt-2 md:w-[400px] mt-10">
              <p class="text-sm text-slate-700 font-semibold">
                cryptocurrency:Lesson 1 of 19
              </p>
              <p class="font-bold text-xl"> A Brief History of Currency</p>
              <p class="text-slate-500 mt-2">
                Trust is the backbone of all currencies,from commodity monies to
                crypto.
              </p>
              <button class="bg-black mt-3 text-white font-semi-bold py-2 px-4 rounded flex justify-evenly">
                <RxResume class="mt-1 mr-2" />
                Resume Course
              </button>
              <div class="w-auto h-1 border-b-4 border-slate-300 rounded mt-5"></div>
            </div>
          </div>
        </div>

        <div>
          <p class="font-bold md:text-xl md:mt-10 mt-56 text-2xl md:pl-12  pl-11">
            Continue learning
          </p>
          <div class="flex justify-around flex-wrap md:mt-5 mt-6">
            <div class="border-2 border-slate-200 p-3">
              <img
                class="h-[200px] w-[250px] rounded"
                src="https://ds055uzetaobb.cloudfront.net/uploads/cJeYwD4nAd-122.svg?width=800"
                alt="not found"
              />
              <div class="mt-3">
                <p class="text-sm text-slate-600 font-semibold">
                  Computer Memory-Lesson 2 of 26
                </p>
                <p class="font-bold w-[220px] text-xl">
                  Binary,Decimal,and Hexadecimal
                </p>
                <div class="w-60 h-1 border-b-4 border-slate-300 rounded"></div>
              </div>
            </div>
            <div class="border-2 border-slate-200 p-3">
              <img
                class="h-[200px] w-[250px] rounded"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5aX3nD6kDeL-4id0XrC9rBpzkn0369649Y24ZDqknq7HHTM0nM04lziOXYANbnSYW4o&usqp=CAU"
                alt="not found"
              />
              <div class="mt-3">
                <p class="text-sm text-slate-600 font-semibold">
                  Random variables & Distributions..
                </p>
                <p class="font-bold w-[220px] text-xl">
                  Random variable Applications
                </p>
                <div class="w-60 h-1 border-b-4 border-slate-300 rounded"></div>
              </div>
            </div>
            <div class="border-2 border-slate-200 p-3">
              <img
                class="h-[200px] w-[250px] rounded"
                src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fds055uzetaobb.cloudfront.net%2Fchapter%2FThe_Brain-cyW3pk.png"
                alt="not found"
              />
              <div class="mt-3">
                <p class="text-sm text-slate-600 font-semibold">
                  Aritificial Neutral Networks-Lessons..
                </p>
                <p class="font-bold w-[220px] text-xl">
                  Computationally Modeling the Brain
                </p>
                <div class="w-60 h-1 border-b-4 border-yellow-500 rounded"></div>
              </div>
            </div>
            <div class="border-2 border-slate-200 p-3">
              <img
                class="h-[200px] w-[250px] rounded"
                src="https://www.wikihow.com/images/thumb/2/24/Win-Baccarat-Step-8-Version-2.jpg/v4-460px-Win-Baccarat-Step-8-Version-2.jpg"
                alt="not found"
              />
              <div class="mt-3">
                <p class="text-sm text-slate-600 font-semibold">
                  Casino Probability-Lesson 3 of 16
                </p>
                <p class="font-bold w-[220px] text-xl">Avoid the Scam</p>
                <div class="w-60 h-1 border-b-4 border-slate-300 rounded mt-6"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="font-bold md:text-xl mt-10 text-2xl md:pl-11 pl-11">
            Recommended for you
          </p>
          <div class="flex flex-wrap ml-11 mt-5">
            <div class="border-2 border-slate-200 p-3">
              <img
                class="h-[200px] w-[250px] rounded"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6-ibYdPUS7WSUn4e69dk-e7b4UBs3XFRFOlRjpjzIMui7nOr"
                alt="not found"
              />
              <div class="mt-3">
                <p class="text-sm text-black font-semibold">
                  Pre-Algebra-Lesson 1 of 28
                </p>
                <p class="font-bold w-[220px] text-xl">
                  understanding variables
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="font-bold md:text-xl mt-12 md:pl-44 text-2xl">Featured learning paths</p>
        <div className="flex justify-center h-[250px] mt-5 flex-wrap gap-4">
          <div class="border border-slate-300 md:h-[230px] p-3 rounded flex justify-around flex-wrap">
            <div>
              <img
                class="h-[200px] w-[200px] rounded"
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Pre-Algebra_puzzles-A75iXn.png"
                alt="not found"
              />
            </div>

            <div class="md:ml-9 md:mt-2 md:w-[300px] mt-10">
              <p class="text-sm text-slate-700 font-semibold">6 Courses</p>
              <p class="font-bold text-xl">Foundational Math</p>
              <p class="text-slate-500 mt-2">
                This 7-course path starts with pre-algebra and builds up to
                fundamentals of algebra and geometry .Let's get started!
              </p>
              <button class="bg-yellow-400 mt-3 text-black font-bold py-2 px-4 rounded-full flex justify-evenly">
                <img
                  class="mt-1 mr-2 h-5 w-5"
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/bookmark-8234117-6562148.png?f=webp&w=256"
                  alt="not found"
                />
                In Progress
              </button>
            </div>
          </div>

          <div class="border border-slate-300 md:h-[230px] p-3 rounded flex justify-around flex-wrap">
            <div>
              <img
                class="h-[200px] w-[200px] rounded"
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Pre-Algebra_puzzles-A75iXn.png"
                alt="not found"
              />
            </div>

            <div class="md:ml-9 md:mt-2 md:w-[300px] mt-10">
              <p class="text-sm text-slate-700 font-semibold">7 Courses</p>
              <p class="font-bold text-xl"> Mathematical Thinking</p>
              <p class="text-slate-500 mt-2">
                This Course path starts with everyday math and builds up to
                fundamentals of algebra and geometry .Let's get started!
              </p>
              <button class="bg-yellow-400 mt-3 text-black font-bold py-2 px-4 rounded-full flex justify-evenly">
                <img
                  class="mt-1 mr-2 h-5 w-5"
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/bookmark-8234117-6562148.png?f=webp&w=256"
                  alt="not found"
                />
                In progress
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
