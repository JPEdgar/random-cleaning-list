import React from 'react'

const App = () => {
<<<<<<< HEAD
  return (
    <div>App</div>
  )
}
=======
   const { tasklist, initialDamage } = useTaskDetails();
   const [initialBossDamage, setInitialBossDamage] = useState(0);
   const [modalType, setModalType] = useState("Task")
   const [show, setShow] = useState(false);

   useEffect(() => {
      if (initialDamage.hasInitialDamage)
         setInitialBossDamage(initialDamage.damage);
      else setInitialBossDamage(0);
   }, [initialDamage]);

   return (
      <>
         <button onClick={() => console.log(tasklist)}>Log task list</button>
         <Container>
            <Title setModalType={setModalType} setShow={setShow}/>
            <MonsterHeader />
            <Tasklist modalType={modalType} setModalType={setModalType} show={show} setShow={setShow}/>
            <MonsterHealth initialDamage={initialBossDamage} />
         </Container>
      </>
   );
};
>>>>>>> 9e267ef7f84e4822a7bf086b61705af43ed29ba9

export default App