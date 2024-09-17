import React, { useState } from "react";
import Button from "../Assets/Components/button/Button";

/* Learn About Usestate */
const Contact = () => {
  const [jumlah, setJumlah] = useState(0);
  const penjumlahan = () => {
    setJumlah(jumlah + 1);
  };

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Budhi");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const [showGreeting, setShowGreeting] = useState(true);
  function togglegreeting() {
    setShowGreeting((currentState) => !currentState);
    console.log(showGreeting);
  }

  const Classmates = [
    "Landewank",
    "Fahreza",
    "Firdaus",
    "Mansur",
    "Julianto",
    "Asyafa Ditra",
    "Alhauna",
    "Andika",
    "Purnama",
    "Putra",
    "Syafii",
    "Ammar"
  ];
  const [teamMembers, setTeamMembers] = useState([]);
  const addTeam = (name) => {
    setTeamMembers((members) => {
      return [...members, name];
    });
  };
  const removeTeam = (name) => {
    setTeamMembers((members) => {
      const result = [...members]
      result.splice(
        members.indexOf(name),1
      )
      return result;
      // return members.filter((member) => member !== name);
    });
  };

  return (
    <>
      <div className="text-white">
        <button onClick={penjumlahan} className="bg-blue-800 p-2">
          +
        </button>
        <span className="bg-green-800 p-2">{jumlah}</span>
        <button
          onClick={() => setJumlah(jumlah - 1)}
          className="bg-blue-800 p-2"
        >
          -
        </button>
      </div>

      {/* useState in string */}
      <div className="">
        <h1>Learn useState with case string data</h1>
        <div className="">
          <label>What's your name? my name is {name} </label> <br />
          <input
            className="border-2 border-neutral-950"
            type="text"
            onChange={updateName}
          />
        </div>
      </div>

      {/* useState in Boolean */}
      <nav>
        <div onClick={() => setOpen(!open)} className="text-3xl">
          <button>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </button>
        </div>
      </nav>
      <div className="">
        <h1 className="">Learn useState in Boolean</h1>
        {showGreeting && <p> Hello {name}, welcome to the class</p>}
        <Button bg_color="bg-blue-600 text-white" onClick={togglegreeting}>
          Toggle Greeting
        </Button>
      </div>

      {/* useState in Array */}
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Learn useState: Array</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-6">
            <h3 className="text-lg text-center font-semibold">Classmates</h3>
            <ul className="divide-y divide-gray-200 border border-gray-300 rounded-lg mt-2">
              {Classmates.map((name) => {
                if (teamMembers.includes(name)) return null;
                return (
                  <li key={name} className="p-4 flex justify-between">
                    {name}
                    <button
                      className="bg-green-600 text-white px-4 py-2"
                      onClick={() => addTeam(name)}
                    >
                      Add
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full md:w-1/2 mb-6">
            <h3 className="text-lg font-semibold text-center">Basket Team</h3>
            <ul className="divide-y divide-gray-200 border border-gray-300 rounded-lg mt-2">
              {teamMembers.map((name) => {
                return (
                  <li key={name} className="p-4 flex justify-between">
                    {name}
                    <button
                      className="bg-red-600 text-white px-4 py-2"
                      onClick={() => removeTeam(name)}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

/**
 * useState tidak bisa digunakan untuk pengkondisian
 * Follwing this tutorial https://www.youtube.com/watch?v=kMpvV7rgfd0
 */
