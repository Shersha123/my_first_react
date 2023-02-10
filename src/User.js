import { Counter } from "./Counter";

//  function User({name,pic}) => object destructuring
export function User(props) {
    const { name, pic } = props;
    return (
        <section>
            <img className='User-profile' src={pic} alt={name} />
            <h1 className='User-name'> Hello, <span className='User-change'>{name} 💕💕</span> </h1>
            <Counter />
        </section>
    );
}
