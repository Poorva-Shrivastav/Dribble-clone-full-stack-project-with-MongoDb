const tileImages = [
    {
    img: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Sjl5clBhSFhSUVl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Daniel Korpai',
    type: 'technology'
    },
    
    {
      img: 'https://images.unsplash.com/photo-1581090690154-98a7a09bc621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      title: 'Arthur Stewart',
      featured: true,
      type: 'business'
    },
    
    {
      img: 'https://images.unsplash.com/photo-1561679421-1e1fd8cc79a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      title: 'Leonardo Davila',
      type: 'architecture'
    },
    {
      img: 'https://images.unsplash.com/photo-1510078344547-e481316148ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80', 
      title: 'Hayleigh Chapman',
      type: 'web'
    },
    {
      img: 'https://images.unsplash.com/photo-1623177579166-7029cf1d4d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
      title: 'Keanu Hood',
        type: 'business'
    },
    {
      img: 'https://images.unsplash.com/photo-1510078344547-e481316148ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80', 
      title: 'Hayleigh Chapman',
      type: 'health'
    },
    {
      img: 'https://images.unsplash.com/photo-1522545361617-59a6f7d3af1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
      title: 'Sabiha Plummer',
      featured: true,
      type: 'technology'
      },
    {
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Reema English',
      type: 'architecture'
    },
    {
      img: 'https://images.unsplash.com/photo-1538855065431-f0c8841ddfed?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8ZGlqcGJ3OTlrUVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Atticus Aldred',
      type: 'history'
    },
    {
      img: 'https://images.unsplash.com/photo-1623786159887-8a747d692e8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      title: 'Hebe Harwood',
      type: 'technology'
    },
    {
      img: 'https://images.unsplash.com/photo-1573124249457-17e0295d94cd?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHxfaGItZGw0US00VXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Cobie Morin',
      type: 'health'
    },
    {
      img: 'https://images.unsplash.com/photo-1567095381200-5b59ca72d2aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=709&q=80',
      title: 'Corinne Mcghee',
      type: 'architecture'
    },
    {
      img: 'https://images.unsplash.com/photo-1612192520597-7c30e0aeb395?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1N3xkaWpwYnc5OWtRUXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Reema English',
      type: 'history'
    },
    {
      img: 'https://images.unsplash.com/photo-1616587896595-51352538155b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      title: 'Ali Hendricks',
      type: 'business'
      
    },
    {
      img: 'https://images.unsplash.com/photo-1598559411842-bcc20b74be4a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGRpanBidzk5a1FRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Frank McDonal',
      type: 'history'
    },
    {
      img: 'https://images.unsplash.com/photo-1542744095-0d53267d353e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Atticus Aldred',
      type: 'web'
    },
    {
      img: 'https://images.unsplash.com/photo-1508090522083-d77ce2c94daa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
      title: 'Leonardo Capti',
      type: 'health'
    },
    {
      img: 'https://images.unsplash.com/photo-1622501104538-20acc874ce72?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGRpanBidzk5a1FRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Ali Haider',
      type: 'history'
      
    },
    
    {
      img: 'https://images.unsplash.com/photo-1585247226801-bc613c441316?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Reema English',
      type: 'web'
    },
    {
      img: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Atticus Aldred',
      type: 'web'
    },
    
  ];
  
  export default tileImages;