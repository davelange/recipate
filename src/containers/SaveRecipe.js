import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Button from '../components/Button';
import FeatherIcon from 'feather-icons-react';

export default function SaveRecipe(props) {

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
                        className="py-2 px-2 text-red-500 rounded-lg flex items-center ml-auto">
                        <span>Remove from saved</span>
                    </Button>
                ) : (                    
                    <Button
                        clickEv={() => props.setSaved( true )}                                                   
                        className="py-2 px-2 text-red-500 rounded-lg flex items-center ml-auto">
                            <span className="mr-1">Save</span>
                            <FeatherIcon icon="heart" height="20" width="20"/>
                    </Button>
                )}                        
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}