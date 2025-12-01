export interface Lecture {
  number: number;
  title: string;
  url: string;
}

export interface CourseUnit {
  name: string;
  lectures: Lecture[];
}

export const inorganicCourses: CourseUnit[] = [
  {
    name: "ATOMIC STRUCTURE",
    lectures: [
      { number: 1, title: "Introduction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FAtomic%20Structure%20%26%20periodicity%2FVIDEO/L01%20automic%20str%20intro.mp4" },
      { number: 2, title: "Electron filling principles, nodes", url: "https://m3u8cdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/19+DEC+2022/INORGANIC/Atomic+Structure+&+periodicity/VIDEO/L02++Electron+filling+principles-+nodes.mp4" },
      { number: 3, title: "Effective nuclear charge", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FAtomic%20Structure%20%26%20periodicity%2FVIDEO/L04_Effective_nuclear_charge.mp4" },
      { number: 4, title: "Atomic Radii", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FAtomic%20Structure%20%26%20periodicity%2FVIDEO/L05-Atomic_Radii.mp4" },
      { number: 5, title: "Ionisation Energy", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FAtomic%20Structure%20%26%20periodicity%2FVIDEO/L04_Effective_nuclear_charge.mp4" },
      { number: 6, title: "Electron Gain Enthalpy", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FAtomic%20Structure%20%26%20periodicity%2FVIDEO/L07-Electron_Gain_Enthalpy.mp4" },
      { number: 7, title: "Electronegativity", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FAtomic%20Structure%20%26%20periodicity%2FVIDEO/L08-Electronegativity.mp4" },
    ]
  },
  {
    name: "CHEMICAL BONDING",
    lectures: [
      { number: 1, title: "Introduction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FChemical%20Bonding%2FVideo/L01_Chemical_Bonding_Introduction.mp4" },
      { number: 2, title: "Orbitals", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FChemical%20Bonding%2FVideo/L02-Orbitals.mp4" },
      { number: 3, title: "Hybridization and Structure", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FChemical%20Bonding%2FVideo/L03-Hybridization.mp4" },
      { number: 4, title: "Dragos molecules", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FChemical%20Bonding%2FVideo/L04-Dragos_molecules.mp4" },
      { number: 5, title: "VSEPR Theory", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FChemical%20Bonding%2FVideo/L05-S%20N%202-%204-%20and%204.mp4" },
      { number: 6, title: "Steric No 5 TBP GEOMETRY", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FChemical%20Bonding%2FVideo/L06-C_N_5_TBP_Geometry.mp4" },
      { number: 7, title: "Steric No 5 Square Pyramidal and BPR", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FChemical%20Bonding%2FVideo/L07-C-N-6.mp4" },
      { number: 8, title: "Steric No 7, 8, FAJAN'S RULE", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FChemical%20Bonding%2FVideo/L08-s_n_8_Fajans_rule.mp4" },
      { number: 9, title: "Dipole Moment", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FChemical%20Bonding%2FVideo/L09---Dipole_Moment.mp4" },
      { number: 10, title: "homo- and heteronuclear molecules", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F19%20DEC%202022%2FINORGANIC%2FChemical%20Bonding%2FVideo/L10MOT.mp4" },
    ]
  },
  {
    name: "COORDINATION",
    lectures: [
      { number: 1, title: "Werner's Theory", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/Coordination_L01_Werner_Theory.mp4" },
      { number: 2, title: "Ligands Classification", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/Coordination_L02_LIGANDS_CLASSIFICATION.mp4" },
      { number: 3, title: "C N 4 stereoisomerism", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/Coordination_chemistry_L04_C_N_4_stereo_ISOMERISM.mp4" },
      { number: 4, title: "CN 6 stereoisomerism", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/Coordination_chemistry_L05_CN_6_Stereoisomers.mp4" },
      { number: 5, title: "Bonding Theories", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F360_Low/L06_Bonding_Theories.mp4" },
      { number: 6, title: "Valence Bond Theory Examples", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/COORDINATION_CHEMISTRY_L07_VBT_EXAMPLES.mp4" },
      { number: 7, title: "Crystal Field Theory", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/COORDINATION_CHEMISTRY_L08_CFT.mp4" },
      { number: 8, title: "Crystal Field Theory In Tetrahedral Complex", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/COORDINATION_CHEMISTRY_L09_CFT_in_TD_complex.mp4" },
      { number: 9, title: "Jahn Teller Distortion", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/COORDINATION_CHEMISTRY_L10_JTD.mp4" },
      { number: 10, title: "Applications of Jahn Teller Distortion", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/COORDINATION_CHEMISTRY_L11_Applications_of_JTD.mp4" },
      { number: 11, title: "Irving Williams Series", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/COORDINATION_CHEMISTRY_L12_Irving_William_series.mp4" },
      { number: 12, title: "Spinels, Acidity of Complex", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/COORDINATION_CHEMISTRY_L13_spinels_acidity_of_complex.mp4" },
      { number: 13, title: "Magnetism", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/COORDINATION_CHEMISTRY_L14_Magnetism.mp4" },
      { number: 14, title: "Term Symbol and Microstates", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F360_Low/L15_Term_Symbol_and_Microstates.mp4" },
      { number: 15, title: "Orgel diagram 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F360_Low/L16_Orgel_diagram.mp4" },
      { number: 16, title: "Orgel diagram 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/COORDINATION_CHEMISTRY_L17_orgel_diagram_contd.mp4" },
      { number: 17, title: "Racah parameter and Tanabe Sugano diagram", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F360_Low/L18_Racah_parameter_and_TS_diagram.mp4" },
      { number: 18, title: "Colour Theory", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720_High/COORDINATION_CHEMISTRY_L19_colour_theory.mp4" },
      { number: 19, title: "Reaction Mechanisms", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FCoordination%2F720/COORDINATION_CHEMISTRY_L%2020_Reaction_Mechanism.mp4" },
    ]
  },
  {
    name: "MAIN GROUP",
    lectures: [
      { number: 1, title: "Boranes", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FBORANES%2F720/MIAN_GROUP_BORANES.mp4" },
      { number: 2, title: "Wades Rule AND STYX Code", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FWADES_RULE_%26_STYX_CODE%2F720/MAIN_GROUP_L02_WADES_RULE_%26_STYX_CODE.mp4" },
      { number: 3, title: "Reactivity Of Boranes 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FReactivity%2F720/MAIN_GROUP_L03_reactivity.mp4" },
      { number: 4, title: "Reactivity Of Boranes 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FReactivity_2%2F720/MAIN_GROUP_L04_reactivity_2.mp4" },
      { number: 5, title: "Carboranes", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FCARBORANES%2F720/MAIN_GROUP_L05_CARBORANES.mp4" },
      { number: 6, title: "Boron Halides ; synthesis, structure and bonding", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FL06_Halides%2F720/MAIN_GROUP_L06_HALIDES.mp4" },
      { number: 7, title: "Boron Nitrogen Compounds", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FBN_COMPOUNDS%2F720/MAIN_GROUP_L07_BN_COMPOUNDS.mp4" },
      { number: 8, title: "Carbon family", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FCarbon_family%2F720/MAIN_GROUP_L08_Carbon_family.mp4" },
      { number: 9, title: "Allotrophy Of C, synthesis, structure", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FALLOTROPES_OF_CARBON%2F720/MAIN_GROUP_L09_ALLOTROPES_OF_CARBON.mp4" },
      { number: 10, title: "Fullerene", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FFULLERENE%2F720/MAIN_GROUP_L10_FULLERENE.mp4" },
      { number: 11, title: "Zintl Ions, Silicates", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FL12_Silicates%2F720/Silicates.mp4" },
      { number: 12, title: "Silicates ; synthesis, structure and bonding", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FL12_Silicates%2F720/Silicates.mp4" },
      { number: 13, title: "Nitogen Family", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FNITROGEN_FAMILY%2F720/MAIN_GROUP_L13_NITROGEN_FAMILY.mp4" },
      { number: 14, title: "P Compounds", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FP_COMPOUNDS%2F720/MAIN_GROUP_L14_P_COMPOUNDS.mp4" },
      { number: 15, title: "Sulphazene", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FMian_Group%2FL15_SULPHAZENE%2FSULPHAZENE%2F720/MAIN_GROUP_L15_SULPHAZENE.mp4" },
    ]
  },
  {
    name: "ORGANOMETALLIC",
    lectures: [
      { number: 1, title: "Molecular Orbital Theory", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2F360/L01_MOT.mp4" },
      { number: 2, title: "18 electron rule", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL02%2F720/OMC_L01_18_E_RULE.mp4" },
      { number: 3, title: "Carbonyl Complex", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL03%2F720/OMC_L03_CARBONYL_COMPLEX.mp4" },
      { number: 4, title: "Low Nuclearity Carbonyl Clusters", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL04%2F720/omc_l0_lncc.mp4" },
      { number: 5, title: "Isolobal Analogy", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FISOLOBAL_ANALOGY%2F720/OMC_L05_ISOLOBAL_ANALOGY.mp4" },
      { number: 6, title: "Synthesis and reactions of OMC", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL06%2F720/OMC_L06_REACTIONS_OF_OMC.mp4" },
      { number: 7, title: "Bonding and Cluster and reactivity", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL07%2F720/OMC_L07_HNCC.mp4" },
      { number: 8, title: "Metal Halide Cluster", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FMETAL_HALIDE_CLUSTER%2F720/OMC_L08_METAL_HALIDE_CLUSTER.mp4" },
      { number: 9, title: "Reactions and Spectra", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FREACTIONS_%26_SPECTRA%2F720/OMC_L09_REACTIONS_%26_SPECTRA.mp4" },
      { number: 10, title: "Carbene", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL10%2F720/OMC_L10_CARBENE.mp4" },
      { number: 11, title: "Migration, Insertion Reaction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL11%2F720/OMC_L11_MIGRATION_NSERTION_REACTION.mp4" },
      { number: 12, title: "Metathesis, Orthometallation, Reductive Elimination", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL12%2F720/OMC_L12_metathesis_orthometallation_reductive_elimination.mp4" },
      { number: 13, title: "Beta Hydride Elimination", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL13%2F360/L13_beta_hydride_elimination.mp4" },
      { number: 14, title: "DMG Rule", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL14%2F720/OMC_L14_dmg_rule.mp4" },
      { number: 15, title: "Metallocene", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL15%2F720/OMC_L15_METALLOCENE.mp4" },
      { number: 16, title: "Reactions Of Metallocene", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL16%2F720/OMC_L16_REACTIONS_OF_METALLOCENE.mp4" },
      { number: 17, title: "Organometallics in homogeneous catalysis", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FOMC%2FL17%2F360/L17_catalysis.mp4" },
    ]
  },
  {
    name: "INNER TRANSITION",
    lectures: [
      { number: 1, title: "Inner Transition Elements : Introduction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/GATE%20CRASH%20COURSE%2FINORGANIC%2FINNER%20TRANSATION/LECTURE%201%20%20inner%20transation%20elements.mp4" },
      { number: 2, title: "Spectral properties of Ln+3", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/GATE%20CRASH%20COURSE%2FINORGANIC%2FINNER%20TRANSATION/LECTURE%202%20%20inner%20transation%20spectroscopy%20of%20Ln%2B3.mp4" },
      { number: 3, title: "Inner Transition Magnetic Moment And Em. Spectra", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/GATE%20CRASH%20COURSE%2FINORGANIC%2FINNER%20TRANSATION/LECTURE%203%20INNER%20TRANSATION%20%20MAGNETIC%20MOMENTS%20AND%20EMISSION%20SPECTRA.mp4" },
      { number: 4, title: "Analytical Applications and Separation of ln Element", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/GATE%20CRASH%20COURSE%2FINORGANIC%2FINNER%20TRANSATION/INNER%20TRANSATION%20L04%20sepration%20of%20lanthnoid%20elenemts.mp4" },
    ]
  },
  {
    name: "BIOINORGANIC",
    lectures: [
      { number: 1, title: "Porphyrins, Metalloporphyrins", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FBioinorganic%2FVideo/L01_Porphyrin_Metalloporphyrins.mp4" },
      { number: 2, title: "Non Heme Units", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FBioinorganic%2FVideo/L02_Non_Heme_Units.mp4" },
      { number: 3, title: "Metalloenzymes", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FBioinorganic%2FVideo/L03_Metalloenzymes.mp4" },
      { number: 4, title: "electron- transfer reactions", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FBioinorganic%2FVideo/L04_Iron_Sulfur_Systems.mp4" },
      { number: 5, title: "Nitrogen Fixation", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FBioinorganic%2FVideo/L05_Nitrogen_Fixation.mp4" },
      { number: 6, title: "photosystems", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FBioinorganic%2FVideo/L06_Photosynthesis.mp4" },
    ]
  },
  {
    name: "INORGANIC SPECTRA",
    lectures: [
      { number: 1, title: "ESR Intro", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FInorganic_Spectra%2FVideo/L01_ESR_Intro.mp4" },
      { number: 2, title: "Zero Field Splitting", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FInorganic_Spectra%2FVideo/L02_Zero_Field_Splitting.mp4" },
      { number: 3, title: "Hyperfine Splitting", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FInorganic_Spectra%2FVideo/L03_Hyperfine_Splitting.mp4" },
      { number: 4, title: "Examples and Dragos Rule", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FInorganic_Spectra%2FVideo/L04_Examples_and_Dragos_Rule.mp4" },
      { number: 5, title: "g Value, Isotropy, Anisotropy", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FInorganic_Spectra%2FVideo/L05_g_Value_Isotropy_Anisotropy.mp4" },
      { number: 6, title: "Mossbauer Spectroscopy", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FInorganic_Chemistry%2FInorganic_Spectra%2FVideo/L06_Mossbauer_Spectroscopy.mp4" },
    ]
  },
  {
    name: "NUCLEAR CHEMISTRY",
    lectures: [
      { number: 1, title: "Introduction , Size And Shape Of Nucleus", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FNUCLEAR%20CHEMISTRY/NET%20ENG%20REC%20NUCLEAR%20CHEMISTRY%20L%2001%20INTRODUCTION-%20SIZE%20%26%20SHAPE%20OF%20NUCLEUS.mp4" },
      { number: 2, title: "Nuclear Stability", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FNUCLEAR%20CHEMISTRY/NET%20ENG%20REC%20NUCLEAR%20CHEM%20L%2002%20NUCLEAR%20STABILITY.mp4" },
      { number: 3, title: "Packing Fraction And Liq Drop Model", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FNUCLEAR%20CHEMISTRY/NET%20ENG%20REC%20NUCLEAR%20CHEM%20L%2003%20PACKING%20FRACTION%20%26%20LIQ%20%20DROP%20MODEL.mp4" },
      { number: 4, title: "Nuclear Shell Model", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FNUCLEAR%20CHEMISTRY/NET%20ENG%20REC%20NUCLEAR%20CHEM%20L%2004%20NUCLEAR%20SHELL%20MODEL.mp4" },
      { number: 5, title: "Nuclear Reactions", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FNUCLEAR%20CHEMISTRY/NET%20ENG%20REC%20L%2005%20NUCLEAR%20REACTIONS.mp4" },
      { number: 6, title: "Theshold Energy Q Value, Nuclear Cross Section", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FNUCLEAR%20CHEMISTRY/NET%20ENG%20REC%20NUCLEAR%20CHEMISTRY%20L%2006%20THRESHOLD%20ENERGY-%20Q%20VALUE-%20NUCLEAR%20CROSS%20SECTION.mp4" },
      { number: 7, title: "Fission, Fusion, Decay Kinetic", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FNUCLEAR%20CHEMISTRY/NET%20ENG%20REC%20NUCLEAR%20CHEM%20L%2008%20RADIOANALYTICAL%20METHODS.mp4" },
    ]
  },
  {
    name: "ANALYTICAL",
    lectures: [
      { number: 1, title: "Principles of Quantitative and Qualitative Analysis", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/1%20Principles%20of%20Quantitative%20and%20Qualitative%20Analysis.mp4" },
      { number: 2, title: "Titrimetric Analysis", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/2%20Titrimetric%20Analysis.mp4" },
      { number: 3, title: "Acid Base Titrations", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/3%20Acid%20Base%20Titrations.mp4" },
      { number: 4, title: "Complexometric Titrations", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/4%20Complexometric%20Titrations.mp4" },
      { number: 5, title: "Precipitation Titrations", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/5%20Precipitation%20Titrations.mp4" },
      { number: 6, title: "Redox Titrations", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/L06%20%20Redox%20Titrations.mp4" },
      { number: 7, title: "Indicator And Organic Reagents", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/L07%20%20Indicator%20And%20Organic%20Reagents!.mp4" },
      { number: 8, title: "Thermoanalytical Methods 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/L08%20%20Thermoanalytical%20Methods%201.mp4" },
      { number: 9, title: "Thermoanalytical Methods 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/L09%20%20Thermoanalytical%20Methods%202.mp4" },
      { number: 10, title: "Thermoanalytical Methods 03", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/L10%20%20Thermoanalytical%20Methods%203.mp4" },
      { number: 11, title: "Electroanalytical Techniques 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/L11%20%20Electroanalytical%20Techniques%201.mp4" },
      { number: 12, title: "Electroanalytical Techniques 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/L12%20%20Electroanalytical%20Techniques%202.mp4" },
      { number: 13, title: "Separation Techniques", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/L13%20%20Separation%20Techniques!.mp4" },
      { number: 14, title: "Spectroscopic Techniques", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/L14%20%20Spectroscopic%20Techniques!.mp4" },
      { number: 15, title: "Nuclear Chemistry", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FINORGANIC%2FANALYTICAL/L15%20%20Nuclear%20Chemistry!.mp4" },
    ]
  },
  {
    name: "ACID BASE",
    lectures: [
      { number: 1, title: "Concepts of acids and bases", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FACID%20BASE/L01%20ACID%20BASE%20ARRHENIUS%20AND%20LOWERY%20BRONSTED%20CONCEPT.mp4" },
      { number: 2, title: "Non-aqueous solvents Auto Ionisation", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FACID%20BASE/L02%20ACID%20BASE%20AUTO%20IONISATION.mp4" },
      { number: 3, title: "Lewis Acid Base Concept", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FACID%20BASE/L03%20ACID%20BASE%20LEWIS%20ACID%20BASE%20CONCEPT.mp4" },
      { number: 4, title: "Hard-Soft acid base concept", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FACID%20BASE/L04%20ACID%20BASE%20HSAB%20CONCEPT.mp4" },
      { number: 5, title: "Practice Questions", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FINORGANIC%2FACID%20BASE/L05%20ACID%20BASE%20PRACTICE%20QUESTIONS.mp4" },
    ]
  }
];

export const physicalCourses: CourseUnit[] = [
  {
    name: "BASIC MATHEMATICS",
    lectures: [
      { number: 1, title: "Units and Conversions", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/26+OCT+2022+CSIR+NET/BASIC+MATHS/VIDEO/L01++Units+and+Conversions.mp4" },
      { number: 2, title: "Powers, Logarithms, Straight Line", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/26+OCT+2022+CSIR+NET/BASIC+MATHS/VIDEO/Basic+Math+L2+Powers%2C+Logarithms%2C+Straight+Line.mp4" },
    ]
  },
  {
    name: "QUANTUM CHEMISTRY",
    lectures: [
      { number: 1, title: "Basic principles of quantum mechanics", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/Quantum%20Chemistry%20L1%20Wave%20Particle%20Duality.mp4" },
      { number: 2, title: "Postulates of Quantum Mechanics, operator algebra", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L02%20%20%20Postulates%20of%20Quantum%20Mechanics.mp4" },
      { number: 3, title: "Commutators and Postulates", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L03%20%20%20Commutators%20and%20Postulates.mp4" },
      { number: 4, title: "Exactly- solvable systems, Particle-in-a-Box", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L04%20%20%20%20Particle%20in%20a%20Box.mp4" },
      { number: 5, title: "Quantum Tunneling", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L05%20%20%20%20Quantum%20Tunneling.mp4" },
      { number: 6, title: "2D, 3D Box", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L06%20%20%20%202D-%203D%20Box.mp4" },
      { number: 7, title: "Harmonic oscillator", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L07%20%20%20SHO.mp4" },
      { number: 8, title: "Rigid Rotor and Hydrogen Atom", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L08%20%20%20Rigid%20Rotor%20and%20H%20Atom.mp4" },
      { number: 9, title: "Approximate Methods of quantum mechanics", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L09%20%20%20Approximation%20Methods.mp4" },
      { number: 10, title: "Linear Variation theorem orbital and spin angular", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L10%20%20Linear%20Variation%20theorem%20and%20Zeeman%20Effect.mp4" },
      { number: 11, title: "Pauli Principle - antisymmetry principle", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Qauntum+Chemistry/Video/L11++Pauli+Principle+and+Multielectronic+atoms.mp4" },
      { number: 12, title: "Slater Determinants , Chemical bonding", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Qauntum+Chemistry/Video/Quantum+Chemistry+L12+Slater+Determinants+and+VBT.mp4" },
      { number: 13, title: "Hybridization Chemical bonding", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L13-Hybridization_and_MOT.mp4" },
      { number: 14, title: "Huckel theory for conjugated π-electron systems", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FQauntum%20Chemistry%2FVideo/L14-Huckel_MOT_Energy.mp4" },
      { number: 15, title: "Huckel MOT Wavefunctions , term symbols", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Qauntum+Chemistry/Video/L15-Huckel_MOT_Wavefunctions_and_Selection_Rules.mp4" },
    ]
  },
  {
    name: "GROUP THEORY",
    lectures: [
      { number: 1, title: "Symmetry Operators(symmetry elements)", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FGroup_Theory%2FVideos/L01_Symmetry_Operators.mp4" },
      { number: 2, title: "Point Groups 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FGroup_Theory%2FVideos/L02_Point_Groups_Part_1.mp4" },
      { number: 3, title: "Point Groups 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FGroup_Theory%2FVideos/L03_Point_Groups_Part_2.mp4" },
      { number: 4, title: "Polarity,Chirality,Character Tables", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FGroup_Theory%2FVideos/L04_Polarity_Chirality_Character_Tables.mp4" },
      { number: 5, title: "Mulliken Notation, Standard Reduction Formula", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FGroup_Theory%2FVideos/L05_Mulliken_Notation_Standard_Reduction_Formula.mp4" },
      { number: 6, title: "Cartesian Coordinate Method", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FGroup_Theory%2FVideos/L06_Cartesian_Coordinate_Method.mp4" },
      { number: 7, title: "Internal Coordinate Method", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FGroup_Theory%2FVideos/L07_Internal_Coordinate_Method.mp4" },
      { number: 8, title: "Symmetry Based Selection Rules", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FGroup_Theory%2FVideos/L08_Symmetry_Based_Selection_Rules.mp4" },
    ]
  },
  {
    name: "PHYSICAL SPECTRA",
    lectures: [
      { number: 1, title: "Molecular spectroscopy - Introduction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FPhysical_Spectra%2FVideos/L01_Introduction.mp4" },
      { number: 2, title: "ROTATIONAL SPECTRA OF DIATOMIC MOLECULES 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FPhysical_Spectra%2FVideos/L02_Rotational_Spectra_Part_1.mp4" },
      { number: 3, title: "Rotational Spectra 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FPhysical_Spectra%2FVideos/L03Rotational_Spectra_Part2.mp4" },
      { number: 4, title: "Vibrational Spectra", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FPhysical_Spectra%2FVideos/L04Vibrational_Spectra.mp4" },
      { number: 5, title: "Vibrational Rotational Spectra", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FPhysical_Spectra%2FVideos/L05_Vibrational_Rotational_Spectra.mp4" },
      { number: 6, title: "Raman Spectra IR and Raman activities", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FPhysical_Spectra%2FVideos/L06_Raman_Spectra.mp4" },
      { number: 7, title: "Electronic Spectra AND Dissociation Energies", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F09_Jan%2FPhysical_Chemistry%2FPhysical_Spectra%2FVideos/L07_Electronic_Spectra_and_Dissociation_Energies.mp4" },
    ]
  },
  {
    name: "SURFACE CHEMISTRY",
    lectures: [
      { number: 1, title: "Introduction and Adsorption Isotherms", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FSurface_Chemistry%2F720_High/L01_Introduction_and_Adsoprtion_Isotherm.mp4" },
      { number: 2, title: "Multilayer Adsorptions , surface area", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FSurface_Chemistry%2F720_High/L02_MULTILAYER_ADSOPRTIONS_AND_LIQUID_GAS_INTERFACE_SURFACE_CHEMISTRY.mp4" },
      { number: 3, title: "Liquid Gas Interface And Colloids", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FSurface_Chemistry%2F720_High/L03_LIQUID_GAS_INTERFACE_AND_COLLOIDS_SURFACE_CHEMISTRY.mp4" },
      { number: 4, title: "Stability and properties of colloids", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FSurface_Chemistry%2F720_High/L04_COLLOIDAL_SOLUTIONS_SURFACE_CHEMISTRY.mp4" },
    ]
  },
  {
    name: "STATISTICAL THERMODYNAMICS",
    lectures: [
      { number: 1, title: "Boltzmann distribution; kinetic theory of gases", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/LIVE+NET+LECTURE+(26+Sep+2022+BATCH)/Physical/Statistical+Thermodynamics/Video/L01+++Statistical+Thermodynamics.mp4" },
      { number: 2, title: "Ensemble", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/LIVE+NET+LECTURE+(26+Sep+2022+BATCH)/Physical/Statistical+Thermodynamics/Video/L02+++Ensemble.mp4" },
      { number: 3, title: "Partition functions", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/LIVE+NET+LECTURE+(26+Sep+2022+BATCH)/Physical/Statistical+Thermodynamics/Video/L03+++Statistics.mp4" },
      { number: 4, title: "calculations for model systems", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2FLIVE%20NET%20LECTURE%20(26%20Sep%202022%20BATCH)%2FPhysical%2FStatistical%20Thermodynamics%2FVideo/L04%20%20%20%20Thermodynamic%20Variable.mp4" },
    ]
  },
  {
    name: "ELECTROCHEMISTRY",
    lectures: [
      { number: 1, title: "electrolytic conductance", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F20_FEB%2FPhysical_Chemistry%2FElectrochemistry%2FVideos/L01_Electrolysis_and_Conductance.mp4" },
      { number: 2, title: "ELECTROLYSIS AND CONDUCTANCE", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F20_FEB%2FPhysical_Chemistry%2FElectrochemistry%2FVideos/L02_Concentration_Dependence_of_Conductivity.mp4" },
      { number: 3, title: "Concentration Dependence of Conductivity", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F20_FEB%2FPhysical_Chemistry%2FElectrochemistry%2FVideos/L03_Kohlrausch_Law_and_Ionic_Mobilities.mp4" },
      { number: 4, title: "Kohlrausch's law", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F20_FEB%2FPhysical_Chemistry%2FElectrochemistry%2FVideos/L04_Ionic_Equilibria.mp4" },
      { number: 5, title: "Ionic Equilibria", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F20_FEB%2FPhysical_Chemistry%2FElectrochemistry%2FVideos/L05_Conductometric_Titrations.mp4" },
      { number: 6, title: "Conductometric Titrations", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F20_FEB%2FPhysical_Chemistry%2FElectrochemistry%2FVideos/L06_Galvanic_Cells_and_Cell_Potentials.mp4" },
      { number: 7, title: "Electrochemical CELLS AND redox systems", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F20_FEB%2FPhysical_Chemistry%2FElectrochemistry%2FVideos/L07_Gibbs_Free_Energy_and_Nernst_Equation.mp4" },
      { number: 8, title: "Gibbs Free Energy and Nernst Equation", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F20_FEB%2FPhysical_Chemistry%2FElectrochemistry%2FVideos/L08_Standard_Cells_and_Activity.mp4" },
      { number: 9, title: "Standard Cells and Activity", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F20_FEB%2FPhysical_Chemistry%2FElectrochemistry%2FVideos/L09_Concentration_Cells_AND_Potentiometric_Titrations.mp4" },
      { number: 10, title: "Concentration cells AND Potentiometric Titrations", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F20_FEB%2FPhysical_Chemistry%2FElectrochemistry%2FVideos/L10_Applications_of_Potential_Measurements.mp4" },
    ]
  },
  {
    name: "CHEMICAL KINETICS",
    lectures: [
      { number: 1, title: "Rate of a Reaction", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Chemical+Kinetics/Video/L01+++Rate+of+a+Reaction.mp4" },
      { number: 3, title: "Zero and First Order Reactions", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Chemical+Kinetics/Video/L03++Zero+and+First+Order+Reactions.mp4" },
      { number: 6, title: "Half life Tricks", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Chemical+Kinetics/Video/L06+++Half+life+Tricks.mp4" },
      { number: 7, title: "Complex Reactions", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Chemical+Kinetics/Video/Chemical+Kinetics+L7+Complex+Reactions.mp4" },
      { number: 14, title: "Collision Theory of rate constants", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Chemical+Kinetics/Video/Chemical+Kinetics+L14+Collision+Theory.mp4" },
      { number: 15, title: "Transition State Theory of rate constants", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FChemical%20Kinetics%2FVideo/Chemical%20Kinetics%20L15%20Transition%20State%20Theory.mp4" },
      { number: 16, title: "Reactions in Solutions - salt effects", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(HINDI%20VERSION)%2F%20LIVE%20NET%20LECTURE%20(06%20th%20JUN%202022%20BATCH)%2FPHYSICAL%2FChemical%20Kinetics%2FVideo/L16%20Reactions%20in%20Solutions.mp4" },
    ]
  },
  {
    name: "POLYMER CHEMISTRY",
    lectures: [
      { number: 1, title: "Properties of Polymers, Kinetics of polymerization", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Polymer+chemistry/video/Polymer+Chemistry+L2+Properties+of+Polymers.mp4" },
      { number: 2, title: "Viscosity Measurements and Experimental Methods", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Polymer+chemistry/video/Polymer+Chemistry+L3+Viscosity+Measurements+and+Experimental+Methods.mp4" },
      { number: 3, title: "Polymerization Kinetics", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(HINDI+VERSION)/+LIVE+NET+LECTURE+(06+th+JUN+2022+BATCH)/PHYSICAL/Polymer+chemistry/video/Polymer+Chemistry+L4+Polymerization+Kinetics.mp4" },
    ]
  },
  {
    name: "EQUILIBRIUM",
    lectures: [
      { number: 1, title: "Introduction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FIONIC%20EQUIlIBRIUM%20/CSIR%20NET%20English%20recording%20%20Ionic%20Equilibrium%20Lec1%20%20Introduction.mp4" },
      { number: 2, title: "Acids and Bases", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FIONIC%20EQUIlIBRIUM%20/CSIR%20NET%20English%20recording%20Ionic%20equilibrium%20Lec%202%20Acids%20and%20Bases.mp4" },
      { number: 3, title: "Salt Hydrolysis", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FIONIC%20EQUIlIBRIUM%20/CSIR%20NET%20English%20recording%20%20Ionic%20Equilibria%20Lec-3%20%20Salt%20Hydrolysis.mp4" },
      { number: 4, title: "Buffer Solution", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FIONIC%20EQUIlIBRIUM%20/CSIR%20NET%20English%20recording%20Ionic%20Equilibrium%20Lecture%204-%20Ostwald%20Dillution%20Law.mp4" },
      { number: 5, title: "Ostwald Dillution Law", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FIONIC%20EQUIlIBRIUM%20/CSIR%20NET%20English%20recording%20%20Ionic%20equilibrium%20Lecture%20-%205%20-%20Buffer%20Solution.mp4" },
      { number: 6, title: "Acid Base Titration", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FIONIC%20EQUIlIBRIUM%20/CSIR%20NET%20English%20Batch%20_%20Ionic%20Equilibrium%20_%20Lecture%206%20-%20Acid-Base%20Titration.mp4" },
      { number: 7, title: "Solubility constant", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FIONIC%20EQUIlIBRIUM%20/CSIR%20NET%20English%20Recording%20_%20Ionic%20Equilibrium%20-%20Lecture%207%20-Solubility%20constant.mp4" },
      { number: 8, title: "Precipitation reaction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FIONIC%20EQUIlIBRIUM%20/CSIR%20NET%20English%20Batch%20_%20Ionic%20Equilibrium%20_%20Lecture%208%20-%20Precipitation%20reaction.mp4" },
      { number: 9, title: "Solubility and PH relation", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FIONIC%20EQUIlIBRIUM%20/CSIR%20NET%20BATCH%20_%20Ionic%20Equilibrium%20_%20Lecture-%209%20-%20Solubility%20and%20pH%20relation.mp4" },
      { number: 10, title: "Introduction to Phase rule", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FPHASE%20EQUILIBRIUM/CSIR%20NET%20English%20Batch%20_%20Phase%20Equilibrium%20_%20Lecture%201%20-%20Introduction%20to%20Phase%20rule.mp4" },
      { number: 11, title: "Phase transitions and equilibrium", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FCHEMICAL%20l%20EQUILIBRIUM/INTRODUCTION.mp4" },
      { number: 12, title: "Phase Rule and Reduced Phase rule", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FCHEMICAL%20l%20EQUILIBRIUM/Equilibrium%20constant%20expression%202.mp4" },
      { number: 13, title: "Equilibrium constant expression", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FPHASE%20EQUILIBRIUM/CSIR%20NET%20ENGLISH%20Phase%20Equilibrium%20Lecture%204%20Clausius%20Clapeyron%20Equation.mp4" },
      { number: 14, title: "Clausius Clapeyron Equation", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FCSIR%20NET%20(ENGLISH%20VERSION)%2FPHYSICAL%2FPHASE%20EQUILIBRIUM/CSIR%20NET%20ENGLISH%20Phase%20Equilibrium%20Lecture%204%20Clausius%20Clapeyron%20Equation.mp4" },
      { number: 15, title: "Temperature Dependence Of Keq", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL+SCIENCE/CSIR+NET+(ENGLISH+VERSION)/PHYSICAL/CHEMICAL+l+EQUILIBRIUM/CSIR+NET+recorded+batch+(English)Chemical+Equilibrium+lecture-3+-+Temperature+dependence+of+Keq.mp4" },
      { number: 16, title: "Factors Affecting Equilibrium, Le Chatelier principle", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL+SCIENCE/CSIR+NET+(ENGLISH+VERSION)/PHYSICAL/CHEMICAL+l+EQUILIBRIUM/CSIR+NET+English+recording+_+Chemical+Equilibrium+Lec-4+-+FACTORS+AFFECTING+EQUILIBRIUM.mp4" },
      { number: 17, title: "CSIR NET PYQ's and phase rule", url: "https://cdn.ifasonline.com/CHEMICAL+SCIENCE/CSIR+NET+(ENGLISH+VERSION)/PHYSICAL/CHEMICAL+l+EQUILIBRIUM/CSIR+NET+English+recording-+Chemical+Equilibrium-+Lecture+5+-+Solved+DPP's.mp4" },
    ]
  }
];

export const organicCourses: CourseUnit[] = [
  {
    name: "GOC (General Organic Chemistry)",
    lectures: [
      { number: 1, title: "Introduction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FGOC_21_Aug%2F720/GOC_L1_Introduction.mp4" },
      { number: 2, title: "Mesomeric effect", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FGOC_21_Aug%2FL02_Mesomeric_effect%2F720/GOC_Mesomeric_effect.mp4" },
      { number: 3, title: "Hyperconjugation", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FGOC_21_Aug%2FHyperconjugation%2F720/GOC_L03_Hyperconjugation.mp4" },
      { number: 4, title: "Acidity 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FGOC_21_Aug%2FAcidity_1%2F360/L4_Acidity_1.mp4" },
      { number: 5, title: "Acidity 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FGOC_21_Aug%2FAcidity_2%2F720/GOC_L5_Acidity_2.mp4" },
      { number: 6, title: "Basicity", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FGOC_31_July%2FBasicity%2F360/L06_Basicity.mp4" },
      { number: 7, title: "Aromaticity", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FGOC_21_Aug%2FAromaticity_1%2F720/GOC_L07_Aromaticity_1.mp4" },
      { number: 8, title: "Benzenoid and Non-Benzenoid compounds", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FGOC_21_Aug%2FL08_Aromaticity_2%2F720/GOC_L08_Aromaticity_2.mp4" },
    ]
  },
  {
    name: "REACTION MECHANISM",
    lectures: [
      { number: 1, title: "Determination of Reaction Pathways", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL01%2F720/RM_L01_Introduction.mp4" },
      { number: 2, title: "Nucleophilic Substitution reaction SN1 AND SN2", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL02%2F720/RM_L02_Sn1_and_Sn2.mp4" },
      { number: 3, title: "Prime Reactions", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL03%2F720/RM_L03_Prime_Reactions.mp4" },
      { number: 5, title: "SNNGP of sigma bond", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL05%2F720/RM_L05_SNNGP_of_sigma_bond.mp4" },
      { number: 6, title: "Electrophilic Aromatic Substitution 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL06%2F360/L06_Electrophilic_Aromatic_Subs_1.mp4" },
      { number: 7, title: "Electrophilic Aromatic Substitution 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL07%2F720/RM_L07_Electrophilic_Aromatic_Subs_2.mp4" },
      { number: 8, title: "SNAE", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FSNAE%2F720/RM_L8_SNAE.mp4" },
      { number: 9, title: "SN(EA) or Benzyne Intermediate", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FSNEA%2F720/RM_L09_SNEA.mp4" },
      { number: 10, title: "Elimination reaction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL10%2F720/RM_L10_E1_and_E2.mp4" },
      { number: 11, title: "Ei and E1cb", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL11%2F720/RM_Lec_11_Ei_and_E1_cb.mp4" },
      { number: 12, title: "Fragmentation", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL11%2F720/RM_Lec_11_Ei_and_E1_cb.mp4" },
      { number: 13, title: "Beckmann Fragmentation", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL13%2F720/RM_Lec_13_Beckmann_Fragmentation.mp4" },
      { number: 14, title: "Ritter and Eschenmoser", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL14%2F720/RM_L14_Ritter_and_Eschenmoser.mp4" },
      { number: 15, title: "Addition Reaction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL15%2F720/RM_L15_Addition_Reaction.mp4" },
      { number: 16, title: "nucleophilic or radical species Addition Reaction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FREACTION_MECHANISM%2FL16%2F360/L16_Addtion_Recation_2.mp4" },
    ]
  },
  {
    name: "REAGENTS",
    lectures: [
      { number: 1, title: "Introduction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FReagents%2F720/Reagents_L1_Introduction.mp4" },
      { number: 4, title: "Birch Reduction 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FReagents%2FBirch_Reduction%2F360/L04_Birch_Reduction.mp4" },
      { number: 5, title: "Birch Reduction 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FReagents%2FBirch_Reduction_2%2F720/Reagents_L5_Birch_Reduction_2.mp4" },
      { number: 6, title: "Inorganic compounds and catalyst based reagents", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2FOxygen_removal_based_reduction%2F720/Reagents_L06_oxygen_removal_based.mp4" },
      { number: 7, title: "Functional group interconversion including Oxidation", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FReagents%2FOxidation_of_Alcohols%2F360/L07_Oxidation_of_Alcohols.mp4" },
      { number: 8, title: "Non Metals Based Oxidation", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FReagents%2FL08%2F720/Lec_8_Non_metals_based_oxidation.mp4" },
      { number: 9, title: "Oxidation of Alkene", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FReagents%2FOxidation_of_Alkene%2F720/Reagent_L09_Oxidation_of_Alkene.mp4" },
      { number: 11, title: "DDQ", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FReagents%2FDDQ%2F720/L11_DDQ.mp4" },
      { number: 13, title: "Organo Si", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FReagents%2FOrgano_si%2F720/Organo_Si.mp4" },
      { number: 15, title: "Cross Coupling", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FReagents%2FL15%2F720/Reagents_L15_Cross_Coupling.mp4" },
      { number: 16, title: "Trost Tsuji", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FReagents%2FTrost_Tsuji%2F360/16_Trost_Tsuji.mp4" },
    ]
  },
  {
    name: "INTERMEDIATES",
    lectures: [
      { number: 1, title: "Generation, stability and reactivity of Carbocations", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720_High/Int_L01_%20Introduction.mp4" },
      { number: 2, title: "Common named reactions and rearrangements 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720_High/Int_L02_Carbocation_1.mp4" },
      { number: 3, title: "Common named reactions and rearrangements 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720_High/Int_L03_Carbocation_2.mp4" },
      { number: 4, title: "Common named reactions and rearrangements 03", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720_High/Int_Lec_4_Carbocation_3.mp4" },
      { number: 5, title: "Generation, stability and reactivity of Carbanion", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720_High/Int_L05_Name_Reaction_1.mp4" },
      { number: 6, title: "Common Named Reactions 01", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720_High/Int_L06%20_Name_Reaction_2.mp4" },
      { number: 7, title: "Common Named Reactions 02", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720_High/Int_L07_Name_Reaction_3.mp4" },
      { number: 8, title: "Common Named Reactions 03", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720/Int_L08_Name_reaction_4.mp4" },
      { number: 9, title: "Common Named Reactions 04", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720_High/Int_L9_Name_reactio_5.mp4" },
      { number: 10, title: "Common Named Reactions 05", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720/Int_L10_Name_Reactions_6.mp4" },
      { number: 11, title: "Common Named Reactions 06", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720/Int_Lec_11_Name_Reaction_7.mp4" },
      { number: 13, title: "Common Named Reactions 08", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F360/L13_Name_Reaction_9.mp4" },
      { number: 14, title: "Generation, stability and reactivity of Carbene", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F360/L14_Carbene_1.mp4" },
      { number: 15, title: "CARBENE", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F360/L15_Carbene_2.mp4" },
      { number: 16, title: "Generation, stability and reactivity of Nitrene", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720/Int_Lec_16_Nitrene.mp4" },
      { number: 17, title: "Generation, stability and reactivity of Free Radicals", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/2023%2FCSIRNET%2FCHEMICALSCIENCE%2FCSIR_NET_LIVE_BATCH%2F03_July%2FIntermediates%2F720/Int_L17_Free_Radicals.mp4" },
    ]
  },
  {
    name: "HETEROCYCLIC",
    lectures: [
      { number: 1, title: "Introduction", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FHETEROCYCLIC/HETEROCYCLIC%20LEC%2001.mp4" },
      { number: 2, title: "Synthesis and Reactivity of Pyrrol", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FHETEROCYCLIC/HETEROCYCLIC%20LEC%2002.mp4" },
      { number: 3, title: "Synthesis and Reactivity of Furan AND Thiophene", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FHETEROCYCLIC/HETEROCYCLIC%20LEC%2003.mp4" },
      { number: 4, title: "Synthesis and Reactivity of Pyridine", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FHETEROCYCLIC/HETEROCYCLIC%20LEC%2004.mp4" },
      { number: 5, title: "Synthesis of Indole", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FHETEROCYCLIC/HETEROCYCLIC%20LEC%2005.mp4" },
      { number: 6, title: "Reaction of Indole", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FHETEROCYCLIC/HETEROCYCLIC%20LEC%2006.mp4" },
      { number: 7, title: "Quinoline and Isoquinoline", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FHETEROCYCLIC/HETEROCYCLIC%20LEC%2007.mp4" },
    ]
  },
  {
    name: "NATURAL PRODUCTS",
    lectures: [
      { number: 1, title: "Amino Acids Proteins and Peptides", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FNATURAL%20PRODUCT/L01%20NP%20AMINO%20ACIDS.mp4" },
      { number: 2, title: "Isoelectronic Point and Peptide linkage", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FNATURAL%20PRODUCT/L02%20NP%20ISOELECTRONIC%20POINT.mp4" },
      { number: 3, title: "Ninhydrin Test , Sangar AND Edmans Method", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FNATURAL%20PRODUCT/L03%20NP%20NINHYDRIN%20TEST%20-%20SANGAR%20AND%20EDMANS%20METHOD.mp4" },
      { number: 4, title: "Carbohydrate Classification AND RXN", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FNATURAL%20PRODUCT/L04%20NP%20CARBOHYDRATE%20CLASSIFICATION%20AND%20RXN.mp4" },
      { number: 5, title: "Osazone formation AND Kiliani Fiscer Synthesis", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FNATURAL%20PRODUCT/L05%20NP%20OSAZONE%20FORMATION%20AND%20KILIANI%20FISCER%20SYSTHESIS.mp4" },
      { number: 6, title: "Mutarotation , Anomeric Effect AND Protection of Diols", url: "https://s3convertedcdn.ifasonline.com/MP4_Compressed_Video/CHEMICAL%20SCIENCE%2FJAN%202020%20BATCH%2FORGANIC%20CHEMISTRY%2FNATURAL%20PRODUCT/L06%20NP%20MUTAROTATION-ANOMERIC%20EFFECT-%20PROTECTION%20OF%20DIOLS.mp4" },
    ]
  }
];
