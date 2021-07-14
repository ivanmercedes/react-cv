const Skill = ({data}) => {

    const skills = data;
    const square = [1,2,3,4,5]
    return ( 
        <div className="skills">
            <div className="heading">
                <h2>Some skills</h2>
            </div>

           <ul className="skill-list">

               {skills.map((skill, index)=>(
                   <li key={index+4}>
                   <div className="tech">
                       {skill.tech}
                   
                   <span>{  square.map((b, index) =>(
                      <svg  key={index} style={{
                        width: 20,
                        marginLeft: 15,
                        verticalAlign: 'text-top',
                        color: `${index+1 <= skill.level ? '#728fc5': '#dde7ef'}`
                        }}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" ></path></svg>
                   ))}</span>
                   </div> 
                  
                </li>
               ))}


            
           </ul>
        </div>
     );
}
 
export default Skill;