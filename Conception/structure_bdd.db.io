

Table a_propos {
  id integer [primary key]
  titre varchar // "Qui suis-je ?"
  contenu text
  image_profil varchar
}

Table contenu_mariage {
  id integer [primary key]
  approche_texte text
  image_header varchar
}

//SÉANCES ET LEURS FORMULES

Table seances_standard {
  id integer [primary key]
  titre varchar
  image_id integer
      description_modale text
}

Table formules_standard {
  id integer [primary key]
  seance_id integer
  nom varchar
  prix varchar
  details text // bullet point
}

Table formules_mariage {
  id integer [primary key]
  nom varchar 
  prix varchar
  details text
  couleur_fond varchar
}

//GALERIE

Table image{
  id integer [primary key]
  url_image varchar
  categorie varchar // 'Mariage' ou 'Standard'
  seance_id integer [note: 'Relie la photo à une séance standard spécifique']
}

//LES FORMULAIRES 

Table contact_standard {
  id integer [primary key]
  prenom varchar
  nom varchar
  email varchar
  telephone varchar
  ville varchar
  type_seance varchar
  message text
}

Table contact_mariage {
  id integer [primary key]
  nom_conjoints varchar
  date_mariage date
  lieu_ceremonie varchar
  lieu_reception varchar
  ville_residence varchar
  nombre_invites varchar
  budget_approx varchar
  message_projet text
}

Table demandes_bon_cadeau {
  id integer [primary key]
  nom_offrant varchar
  email_offrant varchar
  nom_beneficiaire varchar
  formule_souhaitee varchar
  message_personnalise text
}

//ADMIN

Table admin {
  id integer [primary key]
  username varchar
  password varchar
}

//RELATION
Ref: seances_standard.id < formules_standard.seance_id 
Ref: seances_standard.id < image.seance_id