
const path = require('path');
const fs = require('fs');
const moment = require('moment');
// moment.locale(path.join(__dirname, '/../node_modules/moment/locale/es'));
moment.locale('es');
const fonts = {
    Roboto: {
        normal: path.join(__dirname, '/fonts/arial.ttf'),
        bold: path.join(__dirname, '/fonts/arial-bold.ttf'),
        italics: path.join(__dirname, '/fonts/Roboto-Italic.ttf'),
        bolditalics: path.join(__dirname, '/fonts/Roboto-MediumItalic.ttf')
    }
}
const pdfmake = require('pdfmake');
const PdfPrinter = require(path.join(__dirname,'/../node_modules/pdfmake/src/printer'));
const printer = new PdfPrinter(fonts);




module.exports = {
    generarDictamen: (periodo, res) => {
        var content_table = periodo.anteproyectos.map((anteproyecto, index) => {
            return [
                {text: `${(index+1)}`, style: 'row_table'},
                {text: `${anteproyecto.alumno.no_control}`, style: 'row_table'},
                {text: `${anteproyecto.alumno.nombre} ${anteproyecto.alumno.ap_paterno} ${anteproyecto.alumno.ap_materno}`, style: 'row_table'},
                {text: `${anteproyecto.alumno.sexo}`, style: 'row_table'},
                {text: `${anteproyecto.nombre}`, style: 'row_table'},
                {text: `${anteproyecto.asesor_externo.empresa.nombre_titular} \n ${anteproyecto.asesor_externo.empresa.puesto_titular}`, style: 'row_table'},        
                {text: `${anteproyecto.asesor_interno.titulo} ${anteproyecto.asesor_interno.nombre} ${anteproyecto.asesor_interno.ap_paterno} ${anteproyecto.asesor_interno.ap_materno}`, style: 'row_table'},
                {text: `${anteproyecto.asesor_externo.nombre}`, style: 'row_table'},
                {text: `${anteproyecto.dictamen.toUpperCase()}`, style: 'row_table'},
                {text: `${moment(anteproyecto.updatedAt,"YYYY-MM-DD HH:mm:ss").format('DD-MMMM-YYYY')}`, style: 'row_table'}
            ]
        });
        content_table.unshift(['', '', '', '', '', '', {text: 'INTERNO', alignment: 'center', style: 'header_table'}, {text: 'EXTERNO', alignment: 'center', style: 'header_table'}, '', ''])
        content_table.unshift([{text: 'NUM.', alignment: 'center', rowSpan: 2, style: 'header_table'}, {text: 'CONTROL', alignment: 'center', rowSpan: 2, style: 'header_table'}, {text: 'NOMBRE DEL ESTUDIANTE', alignment: 'center', rowSpan: 2, style: 'header_table'}, {text: 'S', alignment: 'center', rowSpan: 2, style: 'header_table'}, {text: 'ANTEPROYECTO', alignment: 'center', rowSpan: 2, style: 'header_table'}, {text: 'NOMBRE Y CARGO DEL TITULAR DE LA EMPRESA', alignment: 'center', rowSpan: 2, style: 'header_table'}, {text: 'ASESOR', alignment: 'center', colSpan: 2, style: 'header_table'},'',{text: 'DICTAMEN', alignment: 'center', rowSpan: 2, style: 'header_table'}, {text: 'FECHA DE DICTAMEN', alignment: 'center', rowSpan: 2, style: 'header_table'}])
        

        var docDefinition = {
            pageSize: 'A4',
            pageOrientation: 'landscape',
            pageMargins: [40, 100, 40, 60],
            header: (currentPage, pageCount) => {
                return {
                        margin: [40, 20, 40, 20],
                        columns: [
                            {
                                table: {
                                    widths: [100, '*', '*', 100],
                                    body: [
                                        [{image: __dirname+'/../public/img/tecnologicos.png', width: 80, height: 45, alignment: 'center', rowSpan: 2}, {text: 'Dictamen de Anteproyecto de Residencias Profesionales', style: 'titulo', alignment: 'center', bold: true, colSpan: 2},'', {image: __dirname+'/../public/img/tec_Logo.png', width: 45, height: 45, alignment: 'center', rowSpan: 2}],
                                        ['',{text: 'Referencia a la Norma ISO 9001:2008  7.5.1', alignment: 'center', colSpan: 2, style: 'subtitulo'},'',''],
                                        [{text: 'Revisión 2', alignment: 'center', style: 'min'}, {text: 'Código: ITCHILPO-AC-PO-007-04', alignment: 'center', bold:true,style: 'min'}, {text: 'Fecha de aplicación: 16-junio-2011', alignment: 'center', style: 'min'}, {text: `Página ${currentPage} de ${pageCount}`, alignment: 'center', style: 'min'}]
                                    ]
                                }
                            }
                            
                        ]
                    }
                
            },
            content: [
                {
                    alignment: 'center',
                    width: '*',
                    bold: true,
                    text: `INSTITUTO TECNOLÓGICO DE CHILPANCINGO \n DEPARTAMENTO DE ${periodo.carrera.departamento.nombre.toUpperCase()}`
                },
                {
                    alignment: 'center',
                    width: '*',
                    bold: true,
                    margin: [0,10,0,20],
                    text: 'DICTAMEN DE ANTEPROYECTOS DE RESIDENCIAS PROFESIONALES'
                },{
                    alignment: 'justify',
                    margin: [20, 0, 20, 20],
                    columns: [
                        {
                            margin: [0,22,0,0],
                            text: [
                                {text: 'CARRERA: ', bold: true},
                                {text: `${periodo.carrera.nombre.toUpperCase()}`, bold: true, decoration: 'underline'}
                            ],
                        },
                        {
                            margin: [180, 0, 0, 0],
                            table: {
                                widths: 'auto',
                                body: [
                                    [{  text: 'SEMESTRE', bold: true, alignment: 'center', rowSpan: 2}, {text: 'FEB-JUN', alignment: 'center', fillColor: (periodo.periodo==='FEBRERO-JUNIO') ? '#d7d9db': ''}, {text: (periodo.periodo==='FEBRERO-JUNIO') ? 'X': '' , alignment: 'center', fillColor: (periodo.periodo==='FEBRERO-JUNIO') ? '#d7d9db': ''}],
                                    ['', {text: 'AGO-DIC', alignment: 'center', fillColor: (periodo.periodo==='AGOSTO-DICIEMBRE') ? '#d7d9db': ''}, {text: (periodo.periodo==='AGOSTO-DICIEMBRE') ? 'X': '' , alignment: 'center', fillColor: (periodo.periodo==='AGOSTO-DICIEMBRE') ? '#d7d9db': ''}]

                                ]
                            }
                        },
                    ]
                },
                {
                    table: {
                        headerRows: 2,
                        widths: [30 ,50, 70, 5, '*', 70, 70, 70, 70,70],
                        body: content_table
                    }
                },
                {
                    margin: [0, 50, 0, 0],
                    columns: [
                        {
                            text: [
                                {text: (periodo.carrera.docentes_carreras) ? `${periodo.carrera.docentes_carreras[0].docente.titulo} ${periodo.carrera.docentes_carreras[0].docente.nombre} ${periodo.carrera.docentes_carreras[0].docente.ap_paterno} ${periodo.carrera.docentes_carreras[0].docente.ap_materno}` :'', style: 'firma', bold: true},
                                {text: '\nNOMBRE Y FIRMA DEL PRESIDENTE DE ACADEMIA', style: 'firma'}
                            ]
                        },
                        {
                            text: [
                                {text: (periodo.carrera.departamento.docentes) ? `${periodo.carrera.departamento.docentes[0].titulo} ${periodo.carrera.departamento.docentes[0].nombre} ${periodo.carrera.departamento.docentes[0].ap_materno} ${periodo.carrera.departamento.docentes[0].ap_paterno}` : '', style: 'firma', bold: true},
                                {text: '\nNOMBRE Y FIRMA DEL JEFE DEL DEPTO. ACADEMICO', style: 'firma'}
                            ]
                        },
                        {
                            text: [
                                {text: '¿ESTE QUIEN ES?',style: 'firma', bold: true },
                                {text: '\nNOMBRE Y FIRMA DEL SUBDIRECTOR ACADEMICO \nVo. Bo.', style: 'firma'}
                            ]
                        }
                    ]
                }
                
            ],
            styles:{
                titulo: {
                    fontSize: 12,
                },
                subititulo: {
                    fontSize: 10,
                },
                min:{
                    fontSize: 9
                },
                header_table:{
                    fontSize: 10,
                    bold: true
                },
                row_table: {
                    fontSize: 9,
                    alignment: 'center'                    
                },
                firma: {
                    fontSize: 10,
                    color: '#505962',
                    alignment: 'center'
                }


            }
        }
        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(fs.createWriteStream(`storeFiles/dictamenes/${periodo.periodo}-${periodo.ciclo}.pdf`));
        pdfDoc.end();
    }
}