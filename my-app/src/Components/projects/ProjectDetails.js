import React from 'react'

const ProjectDetails=(props)=> {
    const id=props.match.params.id;
    return (
       <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card-content">
                   <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio facilis officiis enim, veniam neque ea illo obcaecati et suscipit maiores asperiores expedita deserunt, quam hic exercitationem explicabo modi. Ex?</p>
               </div>
               <div className="card-action gret lighten-4 orange-text">
                   <section>Created by RR</section>
               </div>
           </div>
       </div>
    )
}
export default ProjectDetails

