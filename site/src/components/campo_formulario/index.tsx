import { ErrorMessage, Field } from "formik";
import Container from "./estilo";

type Props = {
    titulo: string;
    nome: string;
    tipo: string;
    placeholder?: string;
    tipo_campo?: string;
    on_change: (e: React.ChangeEvent<HTMLInputElement>) => void | any;
    on_blur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    opcoes?: {
        nome: string;
        id: number;
    }[];
    desativar?: boolean;
};

const CampoFormulario = (props: Props) => {
    if (props.tipo_campo === "textarea") {
        return (
            <Container>
                <div className="bloco_campo_formulario">
                    <span className="texto_formulario">{props.titulo}</span>
                    <Field
                        type={props.tipo}
                        id={props.nome}
                        className="campo_formulario"
                        name={props.nome}
                        placeholder={props.placeholder ?? ""}
                        onChange={props.on_change}
                        onBlur={props.on_blur ?? null}
                        disabled={props.desativar ?? false}
                    >
                        {({ field }: any) => <textarea {...field}></textarea>}
                    </Field>
                    <p className="campo_erro">
                        <ErrorMessage name={props.nome} />
                    </p>
                </div>
            </Container>
        );
    } else if (props.tipo_campo === "select") {
        return (
            <Container>
                <div className="bloco_campo_formulario">
                    <span className="texto_formulario">{props.titulo}</span>
                    <Field
                        type={props.tipo}
                        id={props.nome}
                        className="campo_formulario"
                        name={props.nome}
                        placeholder={props.placeholder ?? ""}
                        onChange={props.on_change}
                        onBlur={props.on_blur ?? null}
                        disabled={props.desativar ?? false}
                        as="select"
                    >
                        <option value={""}>Selecione</option>
                        {props.opcoes &&
                            props.opcoes.map(
                                (opcao: { nome: string; id: number }) => {
                                    return (
                                        <option key={opcao.id} value={opcao.id}>
                                            {opcao.nome}
                                        </option>
                                    );
                                }
                            )}
                    </Field>
                    <p className="campo_erro">
                        <ErrorMessage name={props.nome} />
                    </p>
                </div>
            </Container>
        );
    } else {
        return (
            <Container>
                <div className="bloco_campo_formulario">
                    <span className="texto_formulario">{props.titulo}</span>
                    <Field
                        type={props.tipo}
                        id={props.nome}
                        className="campo_formulario"
                        name={props.nome}
                        placeholder={props.placeholder ?? ""}
                        onChange={props.on_change}
                        onBlur={props.on_blur ?? null}
                        disabled={props.desativar ?? false}
                    ></Field>
                    <p className="campo_erro">
                        <ErrorMessage name={props.nome} />
                    </p>
                </div>
            </Container>
        );
    }
};

export default CampoFormulario;
