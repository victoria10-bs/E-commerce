import React from 'react';

const NewsletterSection = ({ category, title, description, imageUrl, buttonText, buttonUrl }) => {
  return (
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: '#f8f9fa' }}>
      <tbody>
        <tr>
          <td align="center" style={{ padding: '40px 20px' }}>
            
            {/* Tarjeta contenedora (Ancho máximo estándar de 600px) */}
            <table 
              width="100%" 
              border="0" 
              cellspacing="0" 
              cellpadding="0" 
              style={{ 
                maxWidth: '600px', 
                backgroundColor: '#ffffff', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)', 
                fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif" 
              }}
            >
              <tbody>
                
                {/* Imagen Destacada */}
                {imageUrl && (
                  <tr>
                    <td>
                      <img 
                        src={imageUrl} 
                        alt={title} 
                        width="600" 
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', display: 'block', border: '0' }} 
                      />
                    </td>
                  </tr>
                )}

                {/* Cuerpo del texto */}
                <tr>
                  <td style={{ padding: '30px 30px 20px 30px' }}>
                    {category && (
                      <p style={{ margin: '0 0 10px 0', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#4F46E5', letterSpacing: '1px' }}>
                        {category}
                      </p>
                    )}
                    
                    <h2 style={{ margin: '0 0 15px 0', fontSize: '24px', fontWeight: '700', color: '#111827', lineHeight: '1.3' }}>
                      {title}
                    </h2>
                    
                    <p style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#4B5563', lineHeight: '1.6' }}>
                      {description}
                    </p>
                  </td>
                </tr>

                {/* Botón de Acción (Call to Action) */}
                {buttonUrl && buttonText && (
                  <tr>
                    <td style={{ padding: '0 30px 40px 30px' }}>
                      <table border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr>
                            <td align="center" bgcolor="#4F46E5" style={{ borderRadius: '5px' }}>
                              <a 
                                href={buttonUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffffff', textDecoration: 'none', padding: '12px 25px', display: 'inline-block', borderRadius: '5px' }}
                              >
                                {buttonText}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
            {/* Fin de la tarjeta */}

          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default NewsletterSection;