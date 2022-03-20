export const convertDate=(date)=>{
    const months=[
      'Yanvar',
      'Fevral',
      'Mart',
      'Aprel',
      'May',
      'Iyun',
      'Iyul',
      'Avgust',
      'Sentabr',
      'Oktabr',
      'Noyabr',
      'Dekabr',
    ];
    const month=months[date.getMonth()];
    const day=date.getDay();
    const year=date.getFullYear(); 
    return `${month} ${day}, ${year}`;
  }