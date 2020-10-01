import React from 'react';
import cn from 'classnames';


const Message = ({ author, message }) => {
    
        return (
          
            <li className={cn(author === 'Bot' ? 'author-bot' : 'author')}>
                <span>{`${author}: ${message}`}</span>
            </li>
            
    );
};

export default Message;