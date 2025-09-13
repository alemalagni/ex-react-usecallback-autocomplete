const { createRoot } = ReactDOM;

function ReactApp() {
    return (
        <div style={{ margin: '300px auto', width: '35%' }}>
            <input
                type='text'
                placeholder='Search'
                style={{ width: '100%', padding: '5px' }}
            />
        </div>
    )
}

const root = createRoot(document.querySelector(".root"));
root.render(<ReactApp />);