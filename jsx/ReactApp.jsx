const { createRoot } = ReactDOM;

function ReactApp() {
    return (
        <div>
            <input type='text' />
        </div>
    )
}

const root = createRoot(document.querySelector(".root"));
root.render(<ReactApp />);