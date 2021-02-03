import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Button from '../components/Button';
import FeatherIcon from 'feather-icons-react';

export default function SaveRecipe(props) {

    const classNames = 'py-2 text-red-500 rounded-lg flex items-center ml-auto lg:ml-0 lg:mr-auto lg:mt-4';

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                timeout={300} 
                key={ props.saved }
                classNames="toggle-saved">
                
                <div>
                { props.saved ? (
                    <Button
                        clickEv={() => props.setSaved( false )}                                                            
                        className={classNames}>
                        <span>Remove from saved</span>
                    </Button>
                ) : (                    
                    <Button
                        clickEv={() => props.setSaved( true )}                                                   
                        className={classNames}>
                            <span className="mr-1">Save</span>
                            <FeatherIcon icon="heart" height="20" width="20"/>
                    </Button>
                )}                        
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}