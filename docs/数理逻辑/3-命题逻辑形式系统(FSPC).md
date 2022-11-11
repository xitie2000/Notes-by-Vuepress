<!--
 * @FilePath: 3-命题逻辑形式系统(FSPC).md
 * @Author: xitie2000
 * @Date: 2022-11-11 13:50:26
 * @Url: 
-->
# 3 命题逻辑形式系统（FSPC）

## 3.1 命题逻辑与命题演算

Leibniz提出逻辑推理变成符号演算不久，英国数学家BOOL提出了布尔代数。布尔代数把逻辑命题与逻辑推理归结为代数计算。把命题看作是计算对象；把联结词看作算子；讨论计算的性质。

1. **命题（Propositions）：**可以判断真假的陈述句。不涉及任何联结词的命题称为 **原子命题**。

2. **联结词：** $\neg \rightarrow \leftrightarrow \wedge \vee$ 为联结词，用于联结一个或多个命题。

   $\neg A=1-A$

   $A\rightarrow B$ 如果 $A$ 成立则 $B$ 成立，$A\leftrightarrow B$ 如果 $A$ 成立则 $B$ 成立，并且如果 $B$ 成立则 $A$ 成立

   $A\vee B$ 或者 $A$ 成立或者 $B$ 成立；$A\wedge B$ $A$ 成立并且 $B$ 成立。

3. **真值表：** 命题的真假称为命题的真值，用 $0$ 表示假；用 $1$ 表示真。

   $T(\neg A)=1-T(A),\quad T(A)=0,\ T(\neg A)=1$

   $T(A\rightarrow B)=?$ 或者 $A$ 不成立，或者 $B$ 成立，或者说 $A\leq B$
   $$
   \begin{array}{c}
   A=1,B=1,A\rightarrow B=1 \\
   A=0,B=1,A\rightarrow B=1 \\
   A=0,B=0,A\rightarrow B=1 \\
   A=1,B=0,A\rightarrow B=0
   \end{array}
   $$
   由此，可得 $\neg A\vee B=A\rightarrow B$

   $A\vee B=max(A,B)$

   $A\wedge B=min(A,B)=\neg (\neg A\vee\neg B)$

4. **命题变元：**以真值为值域的变量称为命题变元。$Range(T(A))=\{0,1\}$

5. **赋值映射：**命题变元集合到 $\{0,1\}$ 上的函数。如果公式 $A$ 对任意的赋值映射，取值为真，则称 $A$ 为永真式 $TAUTLOGY$。如果公式 $A$ 对于所有赋值映射为假，称为 $A$ 为矛盾式。对于任意赋值映射，公式 $A$ 的真值等于公式 $B$ 的真值，称 $A$ 与 $B$ 等价。

   $(A\rightarrow (B\rightarrow C))\rightarrow ((A\rightarrow B)\rightarrow (A\rightarrow C))=1$

   $A\rightarrow A=1$
   $$
   \begin{equation}
   A\rightarrow (B\rightarrow A)=\left\{
   	\begin{aligned}
   	1 \quad A=0 \\
   	1 \quad A=1\\
   	\end{aligned}
   	\right
   	.
   \end{equation}
   $$
   $A\wedge\neg A=0$

   $T(A\rightarrow B)=T(\neg A\vee B)$

   $A\rightarrow A=1=\neg A\vee A$

   $\neg A\rightarrow A=A$

   $A\rightarrow A\Rightarrow (A\rightarrow A)\rightarrow (A\rightarrow A)$

命题逻辑有以下特点：



