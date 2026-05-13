Table seances_standard {
  id int [pk, increment]
  titre varchar(255)
  image_presentation varchar(255)
  description_module text
}

Table formules_standard {
  id int [pk, increment]
  nom varchar(255)
  prix varchar(255)
  details text
}

Table seance_formules {
  seance_id int
  formule_id int
}

Table demandes_bon_cadeau {
  id int [pk, increment]
  nom_offrant varchar(255)
  email_offrant varchar(255)
  nom_beneficiaire varchar(255)
  formule_souhaitee varchar(255)
  message_personnalise text
}

Table contenu_mariage {
  id int [pk, increment]
  approche_texte text
  image_header varchar(255)
}

Table image {
  id int [pk, increment]
  url_image varchar(255)
  categorie varchar(50)
  seance_id int
}

Table formules_mariage {
  id int [pk, increment]
  nom varchar(255)
  prix varchar(255)
  details text
  couleur_fond varchar(50)
}

Table contact_standard {
  id int [pk, increment]
  prenom varchar(255)
  nom varchar(255)
  email varchar(255)
  telephone varchar(50)
  ville varchar(255)
  type_seance varchar(255)
  message text
}

Table contact_mariage {
  id int [pk, increment]
  nom_conjoints varchar(255)
  date_mariage date
  lieu_ceremonie varchar(255)
  lieu_reception varchar(255)
  ville_residence varchar(255)
  nombre_invites varchar(50)
  budget_approx varchar(100)
  message_projet text
}

Table admin {
  id int [pk, increment]
  username varchar(255)
  password varchar(255)
}

Table a_propos {
  id int [pk, increment]
  titre varchar(255)
  contenu text
  image_profil varchar(255)
}

// Relations
Ref: seance_formules.seance_id > seances_standard.id
Ref: seance_formules.formule_id > formules_standard.id
Ref: image.seance_id > seances_standard.id