import React, { useState, createContext, useContext } from "react";

//Application Level State - Shape of the Hook
const UserContext = createContext([
  {
    firstName: "bob",
    lastName: "Bobberson",
    suffix: 1,
    email: "bobboberson@example.com"
  },
  obj => obj
]);

const LevelFive = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { suffix: user.suffix + 1 }));
        }}
      >
        Increment
      </button>
    </div>
  );
};

const LevelFour = () => {
  return (
    <div>
      <h4>Level4</h4>
      <LevelFive />
    </div>
  );
};

const LevelThree = () => {
  return (
    <div>
      <h3>LevelThree</h3>
      <LevelFour />
    </div>
  );
};

const LevelTwo = () => {
  return (
    <div>
      <h2>LevelTwo</h2>
      <LevelThree />
    </div>
  );
};

const ContextComponent = () => {
  const userState = useState({
    firstName: "bob",
    lastName: "Bobberson",
    suffix: 1,
    email: "bobboberson@example.com"
  });

  return (
    <UserContext.Provider value={userState}>
      <h1>FirstLevel</h1>
      <LevelTwo />
    </UserContext.Provider>
  );
};

export default ContextComponent;
