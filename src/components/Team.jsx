export default function Team() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Head Baker',
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/team-01.jpg',
      bio: '15 years of experience in pastry arts. Specializes in wedding cakes and custom designs.',
      specialty: 'Wedding Cakes'
    },
    {
      name: 'Michael Chen',
      role: 'Pastry Chef',
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/team-02.jpg',
      bio: 'Award-winning pastry chef with expertise in French patisserie techniques.',
      specialty: 'French Pastries'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Cake Decorator',
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/team-03.jpg',
      bio: 'Creative designer specializing in themed cakes and intricate sugar work.',
      specialty: 'Themed Designs'
    }
  ];
  
  return (
    <section className="team-section">
      <div className="team-bg"></div>
      <div className="team-bg-overlay"></div>
      
      <div className="team-inner">
        {team.map((member, index) => (
          <div key={index} className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img loading="lazy" src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
              <div className="flip-box-back">
                <h4>{member.specialty}</h4>
                <p>{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

