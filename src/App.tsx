import SignaturePad from "./components/SignaturePad";

const App = () => {
  const handleSave = (signature: string) => {
    console.log("Signature saved:", signature);
  };
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <SignaturePad onSave={handleSave} />
    </div>
  );
};

export default App;
