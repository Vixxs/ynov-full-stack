const AsideComponent: React.FC = () => {
  return (
    <aside>
      <h2>En relation</h2>
      <ul>
        <li>
          <a href="#">Formulaire d'inscription</a>
        </li>
        <li>
          <a href="#">Notre concepte</a>
        </li>
        <li>
          <a href="#">Histoire du restaurant</a>
        </li>
      </ul>
      <div className="fade-in-image">
        <img
          src="https://source.unsplash.com/fk4tiMlDFF0/800x600/"
          width="300px"
        />
      </div>
    </aside>
  );
};

export default AsideComponent;
