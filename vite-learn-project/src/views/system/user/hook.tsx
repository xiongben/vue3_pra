import {reactive, ref, computed} from "vue";
import { type PaginationProps} from "@pureadmin/table/dist/index";
import dayjs from "dayjs";

export function useUser() {
    const form = reactive({
        username: "",
        mobile: "",
        status: ""
    });
    const dataList = ref([]);
    const loading = ref(true);
    const switchLoadMap = ref({});
    const pagination = reactive<PaginationProps>({
        total: 0,
        pageSize: 10,
        currentPage: 1,
        background: true
    });
    const columns: TableColumnList = [
        {
            type: "selection",
            width: 55,
            align: "left",
            hide: ({ checkList }:{ checkList: any }) => !checkList.includes("勾选列")
        },
        {
            label: "序号",
            type: "index",
            width: 70,
            hide: ({ checkList }:{ checkList: any }) => !checkList.includes("序号列")
        },
        {
            label: "用户编号",
            prop: "id",
            minWidth: 130
        },
        {
            label: "用户名称",
            prop: "username",
            minWidth: 130
        },
        {
            label: "用户昵称",
            prop: "nickname",
            minWidth: 130
        },
        {
            label: "性别",
            prop: "sex",
            minWidth: 90,
            cellRenderer: ({ row, props }) => (
                <el-tag
                    size={props.size}
                    type={row.sex === 1 ? "danger" : ""}
                    effect="plain"
                >
                    {row.sex === 1 ? "女" : "男"}
                </el-tag>
            )
        },
        {
            label: "部门",
            prop: "dept",
            minWidth: 90,
            formatter: ({ dept }:{dept: any}) => dept.name
        },
        {
            label: "手机号码",
            prop: "mobile",
            minWidth: 90
        },
        {
            label: "状态",
            prop: "status",
            minWidth: 90,
            cellRenderer: scope => (
                <el-switch
                    size={scope.props.size === "small" ? "small" : "default"}
                    loading={switchLoadMap.value[scope.index]?.loading}
                    v-model={scope.row.status}
                    active-value={1}
                    inactive-value={0}
                    active-text="已开启"
                    inactive-text="已关闭"
                    inline-prompt
                    onChange={() => onChange(scope as any)}
                />
            )
        },
        {
            label: "创建时间",
            minWidth: 90,
            prop: "createTime",
            formatter: ({ createTime } : { createTime : any}) =>
                dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
        },
        {
            label: "操作",
            fixed: "right",
            width: 180,
            slot: "operation"
        }
    ];
    const buttonClass = computed(() => {
        return [
            "!h-[20px]",
            "reset-margin",
            "!text-gray-500",
            "dark:!text-white",
            "dark:hover:!text-primary"
        ];
    });
}