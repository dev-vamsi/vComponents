import Button from './components/Button';
import Input from './components/Input';

const App = () => {
    return (
        <div className='container mx-auto py-5'>
            <h1 className='text-2xl font-bold'>Welcome to V-components</h1>
            <Input placeholder='Email' />
            <Input placeholder='Password' />
            <Button>Click Me</Button>
        </div>
    );
};

export default App;
