export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, idx) => (
        <img
          src={project.img}
          alt={project.category}
          key={project.img + idx}
          className="project-item"
        />
      ))}
    </div>
  );
}
