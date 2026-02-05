import Layout from './Layout.jsx';
import AlertButton from './AlertButton/AlertButton.jsx';
import ListNama from './list/ListNama.jsx';

function App() {
    return (
        <Layout>
            <div className="hero-section">
                <h1>Halo</h1>
                <p>
                    Ini contoh
                </p>
            </div>
            <AlertButton text="Tekan Aku" message="Halo, ini pesan dari AlertButton!" />
            <ListNama />
        </Layout>
    );
}

// function App() {
//   return (
//     <Layout>
//       <div className="hero-section">
//         <h1>Halo</h1>
//         <p>
//           Ini contoh
//         </p>
//       </div>
//     </Layout>
//   );
// }

export default App;
