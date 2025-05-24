import Button from '@components/Button/Button';
import './app.scss';

function App() {
  const toggleTheme = () => {
    // document.body.className = 'theme1';
    if (document.body.className === 'theme1') {
      document.body.className = '';
    } else {
      document.body.className = 'theme1';
    }
  };
  return (
    <>
      <div className="app">
        <button className="theme-setter" onClick={() => toggleTheme()}>
          Change theme
        </button>

        <Button />
      </div>
    </>
  );
}

export default App;
