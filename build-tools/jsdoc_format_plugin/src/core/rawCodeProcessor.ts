import ts from "typescript";
import { Code } from "../utils/constant";
import { comment, Context, ISourceCodeProcessor, ProcessResult, sourceParser } from "./typedef";

export class RawSourceCodeProcessor implements ISourceCodeProcessor, sourceParser.INodeVisitorCallback {
    process(context: Context, content: string): ProcessResult {
        const sourceParser: sourceParser.SourceCodeParser = context.getSourceParser(content);
        const sourceFile: ts.SourceFile = sourceParser.visitEachNodeComment(this);
        return {
            code: Code.OK,
            content: sourceParser.printSourceFile(sourceFile)
        };
    }

    onVisitNode(node: comment.CommentNode): void {
        // TODO 缓存原始文件的AST节点信息，用于后续处理时查找原始代码位置
    }
}